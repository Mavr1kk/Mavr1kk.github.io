  $(function(){

    // Fixed Header

    let header = $("#header"),
        intro = $("#intro"),
        introH = intro.innerHeight(),
        scrollPos = $(window).scrollTop();

        checkScroll(introH, scrollPos);

        $(window).on("scroll resize", function(){

          introH = intro.innerHeight();
          scrollPos = $(this).scrollTop();

          checkScroll(introH, scrollPos);
          
        });

        function checkScroll(introH, scrollPos){
          if(scrollPos >= introH) {
            header.addClass("fixed");
          } else {
            header.removeClass("fixed");
          }
        }


        // Smooth scroll

    $('[data-scroll]').on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data("scroll"),
            elementOffset = $(elementId).offset().top;

        $("html, body").animate({
          scrollTop: elementOffset - 65
        }, 700);
      
        nav.removeClass("show");

    });

       // Nav Toggle 

      let nav = $("#nav"),
      navToggle = $("#navToggle");

    navToggle.on("click", function(event){

      event.preventDefault();

      nav.toggleClass("show");


    })



    // Reviews Slider https://kenwheeler.github.io/slick/

    let slider = $("#reviewsSlider  ");

    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
    });













  });