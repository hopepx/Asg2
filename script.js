// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});


const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  filterBox.setAttribute("data-filter", this.dataset.filterBtn)
}

addEventOnElem(filterBtns, "click", filter);



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

