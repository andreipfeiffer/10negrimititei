$(function() {
	'use strict';

	$('#details-slideshow')
		// toggle caption when clicking on image
		.on('click', function() {
			$(this).find('.caption').slideToggle('fast');
		})
		// disable toggling when clicking the navigation items
		.on('click', '.slidesjs-navigation, .slidesjs-pagination', function(e) {
			e.stopPropagation();
		})
		.slidesjs({
			width: 1500,
			height: 1000
		});

	$('.b-heading__title').bigtext({
		maxfontsize: 160 // default is 48 (in px)
	});
	// $('.b-heading__subtitle').bigtext({
	// 	maxfontsize: 32 // default is 48 (in px)
	// });

});