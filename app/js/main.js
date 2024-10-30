$(function () {
	$("#example_id").ionRangeSlider({
		"min": 100,
		"max": 3000,
		from: 2500,
	});

})

var swiper = new Swiper(".partners__slider", {
	slidesPerView: 2,
	spaceBetween: 25,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		576: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	}
});

$(".accordeon dd").hide().prev().click(function () {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
	$("dl").removeClass("open");
	$(this).parent().toggleClass("open");
});


 // меню гамбургер
 const menuBtn = document.querySelector(".header__menu-btn");
 const navMenu = document.querySelector(".header__nav");
 const header = document.querySelector(".header");
 
 if (menuBtn && navMenu && header) {
	 menuBtn.addEventListener("click", function () {
		 this.classList.toggle("active");
		 navMenu.classList.toggle("open");
		 document.body.classList.toggle("lock");
		 document.body.classList.toggle("bg-dark");  // Тогл класу для body
		 header.classList.toggle("active");
	 });
 }
 
 const productAdd = document.querySelector('.product__add');
 if (productAdd) {
	 productAdd.addEventListener('click', function () {
		 this.classList.toggle('active');
		 document.body.classList.toggle('product-added'); // Тогл іншого класу для body
	 });
 }
 