
  //<!-- cards carousel -->
  //<script>
    $(document).ready(function($) {
      $("#card-carousel").owlCarousel();
    });
    $("body").data("page", "frontpage");
  //</script>

 // <!-- image carousel -->
  //<script>
    $(document).ready(function() {
      $("#image-carousel").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
      });

    });
  //</script>

  //<!-- posts carousel -->
  //<script>
    $(document).ready(function() {
      $("#posts-carousel").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
      });

    });
  //</script>

  //<!-- posts carousel 3col -->
  //<script>
    $(document).ready(function() {
      $("#posts-carousel-3col").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
      });

    });
  //</script>

  //<!-- image slider -->
  //<script>
    $(document).ready(function() {
      $("#image-slider").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

      });
    });
  //</script>

 // <!-- testimonial carousel -->
  //<script>
    $(document).ready(function() {
      $("#single-testimonial-item").owlCarousel({
        items: 5,
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true

      });
    });
  //</script>
 // <!-- / javascript -->
