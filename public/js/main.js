$(function() {
	'use strict';

	$('#details-slideshow')
		.on('click', function() {
			$(this).find('.caption').slideToggle('fast');
		})
		.on('click', '.slidesjs-navigation', function(e) {
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