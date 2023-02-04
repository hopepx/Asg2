// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

const carousel = new Swiper('.carouselbox', {
	spaceBetween: 30, 
	slidesPerView: 'auto', 
	centeredSlides: true,
	
	// If we need pagination 
	navigation: {
		nextEl: '.swiper-button-next',
		prevtEl: '.swiper-button-prev',
	},
    breakpoints: {
	    481: {
		    slidesPerView: 2,
		    slidesPerGroup: 1,
		    centeredSlides: false,
	},
	    640: {
		    slidesPerView: 3,
		    slidesPerGroup: 3, 
            centeredSlides: false,
	},
	    992: {
		    slidesPerView: 4,
		    slidesPerGroup: 4,
		    centeredSlides: false,
	}
}
});

