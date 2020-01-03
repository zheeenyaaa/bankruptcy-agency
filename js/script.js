const preloader = document.querySelector('.preloader');


if (document.documentElement.clientWidth > 992) {
	document.body.classList.add('no-scroll');
}

window.addEventListener('load', () => {
	setTimeout(() => {
		preloader.style.display = 'none';
		if (document.documentElement.clientWidth > 992) {
			document.body.classList.remove('no-scroll');
		}
	}, 1000);
});


var wow = new WOW(
	{
		boxClass: 'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0,          // distance to the element when triggering the animation (default is 0)
		mobile: true,       // trigger animations on mobile devices (default is true)
		live: true,       // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null,    // optional scroll container selector, otherwise use window,
		resetAnimation: true,     // reset animation on end (default is true)
	}
);
wow.init();



$('.wow').attr('data-wow-delay', '0.3s');
$('.header .wow').attr('data-wow-delay', '1s');
$('.intro .wow').attr('data-wow-delay', '1s');
$('.offer .wow').attr('data-wow-delay', '1s');

$('.offer__slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('.button__prev'),
	nextArrow: $('.button__next'),
	arrows: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

$('.document__slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: $('.button__prev_two'),
	nextArrow: $('.button__next_two'),
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$(".telephone").mask("(999) 999-9999");

let current = $('#slide1');

$('#tab1').on('click', () => {
	current.toggleClass('long__slide_active');
	current = $('#slide1');
	current.toggleClass('long__slide_active');
});


$('#tab2').on('click', () => {
	current.toggleClass('long__slide_active');
	current = $('#slide2');
	current.toggleClass('long__slide_active');
});


$('#tab3').on('click', () => {
	current.toggleClass('long__slide_active');
	current = $('#slide3');
	current.toggleClass('long__slide_active');
});


$('#tab4').on('click', () => {
	current.toggleClass('long__slide_active');
	current = $('#slide4');
	current.toggleClass('long__slide_active');
});


$('#tab5').on('click', () => {
	current.toggleClass('long__slide_active');
	current = $('#slide5');
	current.toggleClass('long__slide_active');
});


$('#tab6').on('click', () => {
	current.toggleClass('long__slide_active');
	current = $('#slide6');
	current.toggleClass('long__slide_active');
});

$('#tab7').on('click', () => {
	current.toggleClass('long__slide_active');
	current = $('#slide7');
	current.toggleClass('long__slide_active');
});

$('#tab8').on('click', () => {
	current.toggleClass('long__slide_active');
	current = $('#slide8');
	current.toggleClass('long__slide_active');
});

current.toggleClass('long__slide_active');

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
	button.addEventListener('touchstart', () => {
		button.style.opacity = '1';
		button.style.transform = 'translateX(10px)';
	});

	button.addEventListener('touchend', () => {
		button.style.opacity = '0.7';
		button.style.transform = 'none';
	});
});