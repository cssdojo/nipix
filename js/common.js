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

});