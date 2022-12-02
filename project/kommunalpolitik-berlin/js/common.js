// CUSTOM JQUERY UI START

// AFFIX NAVIGATION 
$(document).ready(function() {

  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
    
    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
      
  };

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
    // init
    toggleAffix(ele, $(window), wrapper);
  });
  
});

 $(document).ready(function() {
            $('.evAnPu-box').owlCarousel({
                loop: true,
                nav: false,
                width: 100,
                itemsDesktop: false,
                itemsMobile: true,
                dots: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 25,
                    },
                    600: {
                        items: 1,
                        margin: 25,
                    },
                    990: {
                        items: 1,
                        margin: 25,
                    },
                    1000: {
                        items: 1000,
                        nav: false,
                        dots: false,   
                        loop: false
                    }
                }
            });

            $(".form-search .affix-search").click(function (){
                $(this).parent().find($(".glyphicon")).toggleClass('glyphicon-search glyphicon-remove');
                $(this).parent().toggleClass("affix-search-bar");
                $( ".form-search .form-control" ).focus();

            });

           
        });