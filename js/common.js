head.ready(function() {

	function dropdown() {
		$('.js-order').hide();
		$('.js-order-btn').on('click', function(event) {
			$('.js-order').slideDown('fast');
			return false;
		});
		$(document).click(function(event) {
			if($(event.target).parents().index($('.header__order')) == -1) {
				$('.js-order').slideUp('fast');
			}
		});
	} dropdown();

	function modals() {
		$(document).on("click", function(){
			$(".js-overlay").hide();
			$("body").removeClass("has-open-popup");
		});
		$(".js-popup-link").on("click", function(event){
			$(".js-overlay").fadeOut(200);
			var popup = $(this).attr("href");
			$("body").addClass("has-open-popup");
			$("."+popup).parent().fadeIn(200);
			event.stopPropagation();
			return false;
		});
		$(".js-popup-close").on("click", function(){
			$(".js-overlay").fadeOut(200);
			$("body").removeClass("has-open-popup")
			return false;
		});
		$(".js-popup").on("click", function(event){
			event.stopPropagation();
		});
	} modals();

	$('.js-slider').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "carousel",
			// autoHeight: "container",
			timeout:  0,
			carouselVisible: 1,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "slider__slide",
			allowWrap: true,
			carouselFluid: "true",
			slides: $('.slider__slide', p),
			prev:   $('.slider__prev', p),
			next:   $('.slider__next', p),
			pager: ".slider__pager",
			pagerTemplate: "<span>•</span>"
		});
	});

});