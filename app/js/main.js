$(function () {
	$("#example_id").ionRangeSlider({
		"min": 100,
		"max": 3000,
		from: 2500,
	});

})

var swiper = new Swiper(".partners__slider", {
	slidesPerView: 5,
	spaceBetween: 25,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

$(".accordeon dd").hide().prev().click(function () {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
	$("dl").removeClass("open");
	$(this).parent().toggleClass("open");
});
