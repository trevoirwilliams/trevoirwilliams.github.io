---
layout: post
title: JWT (Json Web Token) Authentication in ASP.NET Core
sub-title: This is a guide to implement JWT Authentication in a .NET Core Application
img: jwt.jpg
keywords: jwt,tokens,authentication,.net core,core,dotnet,json,web,rest,api,development
---

{% include JB/setup %}

{{page.sub-title}}

<!--more-->

Json Web Tokens facilitate stateless authentication in apps. When compared to traditional basic authentication, they remove some amount of overhead and session creation, by producing a string containing pertinent information to a JWT reciepient. This method provides a decoupled authentication mechanism, whcih in the case of an API, doesn’t manage any user-related data.  

The general authentication flow for a JWT enabled API is:
<ul class="list-style check-list pl-0">
    <li>
    <i class="fa fa-check light-green" aria-hidden="true"></i> User sends a request with Credentials (Authentication)
    </li>
    <li>
    <i class="fa fa-check light-green" aria-hidden="true"></i> Token service validates the credentials and provides a token (Verification)
    </li>
    <li>
    <i class="fa fa-check light-green" aria-hidden="true"></i> The User sends this token with each request to access resources (Authorization)
    </li>
    <li>
    <i class="fa fa-check light-green" aria-hidden="true"></i> Finally, API verifies the token and respond 
    </li>
</ul>

Please note that Tokens generally have an expiration date/time attached to them, which can be used to prompt a user to re-authenticate in the client application. 

The following are steps to facilitate JWT authentication in a .NET Core application.

#### Prerequisites
Visual Studio 2019
.NET Core 3.0/3.1

#### Preparations
Create a new Web MVC Project. These steps assume that you are using identity core and authenticating against a database developed for your application.

Install the following Nuget packages (Include Pre-release) that provide JWT parsing functionality.

```csharp
Microsoft.Aspnetcore.Authentication.Jwtbearer
System.IdentityModel.Tokens.Jwt
Microsoft.IdentityModel.Tokens
```

#### Configure Middleware

To set up authentication, modify the ConfigureServices, in *Startup.cs* method in startup like below:

```csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(o => {
                    o.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = Configuration["Jwt:Issuer"],
                        ValidAudience = Configuration["Jwt:Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))

                    };
                });
```
Be sure to put this above the *services.AddController();* line.

In our *appsettings.json* file, we need to make sure we have the following configurations:

```json
"Jwt": {
    "Key": "ffc632ce-0053-4bab-8077-93a4d14caaad", //THIS IS USED TO SIGN AND VERIFY JWT TOKENS
    "Issuer": "test.com"
```

Now with those configurations made, we can create our User API Controller, which will have the login endpoint. It will authenticate the user (using **SignInManager**) and then proceed to generate a token for the authenticated user, then return an Ok(200) response with the token code attached to the body.

```csharp
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;

        public UsersController(SignInManager<IdentityUser> signInManager,
        UserManager<IdentityUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }
        
        [Route("login")]
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] string emailaddress, string password)
        {
            try
            {
                //Sign user in with username and password from parameters. This code assumes that the emailaddress is being used as the username. 
                var result = await _signInManager.PasswordSignInAsync(emailaddress, password, false, false);

                if (result.Succeeded)
                {
                    //Retrieve authenticated user's details
                    var user = await _userManager.FindByEmailAsync(emailaddress);

                    //Generate unique token with user's details
                    var tokenString = await GenerateJSONWebToken(user);

                    //Return Ok with token string as content
                    return Ok(new { token = tokenString });
                }
                return Unauthorized();
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        private async Task<string> GenerateJSONWebToken(IdentityUser user)
        {
            //Hash Security Key Object from the JWT Key
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            
            //Generate list of claims with general and universally recommended claims
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };
            //Retreive roles for user and add them to the claims listing
            var roles = await _userManager.GetRolesAsync(user);
            claims.AddRange(roles.Select(r => new Claim(ClaimsIdentity.DefaultRoleClaimType, r)));
            //Generate final token adding Issuer and Subscriber data, claims, expriation time and Key
            var token = new JwtSecurityToken(_config["Jwt:Issuer"]
                , _config["Jwt:Issuer"],
                claims,
                null,
                expires: DateTime.Now.AddHours(5),
                signingCredentials: credentials
            );

            //Return token string
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
```
Now we can test this endpoint using Postman. 
![Postman Test](/assets/images/postman-test.png)

Now we can see that we are successfully retrieving the token from our authentication attempt. We now need to include this token in any subsequent call, to any controller that has the Authorize attribute. 

Using a sample Book Controller, we can add the **[Authorize]** attribute, which will cause a 401 response to all unauthenticated requests. 

```csharp
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;
        public BooksController(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }
        /// <summary>
        /// Get All Books
        /// </summary>
        /// <returns>A List of Books</returns>
        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            try
            {
                var books = await _bookRepository.FindAll();
                return Ok(books);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
```

Below, we call this endpoint using Postman and include the bearer token in the request header.

![Postman Bearer Token](/assets/images/postman-bearer.png)

In the same way if there were roles outlined in the Authorize attribute, the claims section would be parsed to determine what role the user is in and deny them access accordingly. 

Learn how to build a RESTful API for a book store’s database using ASP.NET Core 3.1 API, Entity Framework, the Repository Pattern and Blazor for client side development in [End to End ASP.NET Core 3.1 API and Blazor Development](https://bit.ly/core-api-website)

Thank you for reading and comment below if you ran into any issues, or if you have suggestions.
 
Thank you again.