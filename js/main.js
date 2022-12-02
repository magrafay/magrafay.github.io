$(document).ready(function () {

    // PRELOADER
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.

        // PAGE LOADER
    jQuery('#grid-container').on('initComplete.mag', function () {
        if ($('#ajax-tab-container').length) {
            $('#ajax-tab-container').easytabs({
                tabs: 'header nav ul li'
            });
        }
    });

    // RESPONSIVE MENU
    function transform(){
        var outdiv = '<div class="menuout"><div class="menuin"><ul class="tabs"></ul></div></div>';
        $(outdiv).appendTo("nav");
        var resmenus = $('.tabs').html();
        $(".menuout .menuin .tabs").append(resmenus);
       $('.menuin').hide(); 
    }
    transform();
    $('.hamburger').on('click', function() {
       $('.menuin').slideToggle(); 
    });
    $('.menuout').on('click', function () {
        $('.menuin').slideUp();  
    });

    // OWL CAROUSEL GENERAL JS
    if ($('.owl-carousel').length) {
        $('.owl-carousel').each(function () {
            $(this).owlCarousel({
                items: $(this).data('items') ? $(this).data('items') : 3
                , autoPlay: $(this).data('autoplay') ? $(this).data('autoplay') : 2500
                , pagination: $(this).data('pagination') ? $(this).data('pagination') : false
                , itemsDesktop: [1199, 3]
                , itemsDesktopSmall: [979, 3]
            });
        });
    }

    // PORTFOLIO CONTENT  
    $('#grid-container').magportfolio({
        layoutMode: 'grid',
        filters: '#filters-container',
        gridAdjustment: 'responsive',
        animationType: 'skew',
        defaultFilter: '*',
        gapVertical: 0,
        gapHorizontal: 0,
        singlePageAnimation: 'fade',
        mediaQueries: [{
                width: 700,
                cols: 3,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 30,
                    gapVertical: 20,
                }
            }, {
                width: 320,
                cols: 1,
                options: {
                    caption: '',
                    gapHorizontal: 50,
                }
            }],            
        singlePageCallback: function (url, element) {
            var t = this;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function (result) {
                    t.updateSinglePage(result);
                })
                .fail(function () {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
            plugins: {
                loadMore: {
                    element: '#js-loadMore-agency',
                    action: 'click',
                    loadItems: 3,
                }
            }
    }); 
	
	/* Affix profile */
	$('.profile').affix({
	  offset: {
		top: 50
	  }
	});

	/* activate scrollspy menu */
	var $body   = $(document.body);
	var navHeight = $('.navbar').outerHeight(true) + 10;

	$body.scrollspy({
		target: '#leftCol',
		offset: navHeight
	});

	/* smooth scrolling sections */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 50
			}, 1000);
			return false;
		  }
		}
    });
    
    // Trigger Tab From Other Link
    
    // BLOG CONTENT  
    $('#grid-blog').magportfolio({
        layoutMode: 'grid',
        gridAdjustment: 'responsive',
        gapVertical: 0,
        gapHorizontal: 0,
        mediaQueries: [{
                width: 700,
                cols: 3,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 30,
                    gapVertical: 20,
                }
            }, {
                width: 320,
                cols: 1,
                options: {
                    caption: '',
                    gapHorizontal: 50,
                }
            }],
            plugins: {
                loadMore: {
                    element: '#load-posts',
                    action: 'click',
                    loadItems: 3,
                }
            }
    }); 

    // GALLERY WIDGET  
    $('#widget-gallery').magportfolio({
        layoutMode: 'grid',
        gridAdjustment: 'responsive',
        gapVertical: 0,
        gapHorizontal: 0,
        mediaQueries: [{
                width: 700,
                cols: 4,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 30,
                    gapVertical: 20,
                }
            }, {
                width: 320,
                cols: 1,
                options: {
                    caption: '',
                    gapHorizontal: 50,
                }
            }]
    }); 

}); // document ready end 


"use strict";
$(window).load(function () {





}); // window load end 










