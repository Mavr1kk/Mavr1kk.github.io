$(function(){
  // header fixed

  const header = $('#header');
  const intro = $('#intro')
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(introH, scrollPos);

  $(window).on("scroll resize", function(){

    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(introH, scrollPos);
    
  });

  
  function checkScroll(introH, scrollPos){
    if(scrollPos >= introH) {
      header.addClass("header__fixed");
    } else {
      header.removeClass("header__fixed");
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
          
            nav.removeClass("header__right-side-flex");
    
        });

         // Nav Toggle 

        let nav = $("#nav"),
        navToggle = $("#navToggle");

        navToggle.on("click", function(event){

        event.preventDefault();

        nav.toggleClass("header__right-side-flex");


      })
})