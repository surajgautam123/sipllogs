// MM Menu 
$(function() {	
	$('nav#menu').mmenu({
	"offCanvas": {
                  "position": "right"
               },
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		navbars		: [
			{
			}, {
				content: [
					'close'
				]
			}
		]
	});
});
$(document).ready(function(e){
	/*photo slider*/
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: false,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		]
	});
	
	/*home main slider*/
	$('.fade-effect').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
/*our network carousal*/
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
				
	//Mid Slider
	$('.mid-slider').slick({
		dots: true,
		touchMove: true,
		//autoplay: true,
		});
		
		/*top search code*/
		var submitIcon = $('.fa-search');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.fa-search').css('display','block');
                        submitIcon.click();
                    }
                });
				


  
});

