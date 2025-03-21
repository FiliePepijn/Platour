// import Swiper JS
import Swiper from 'swiper';
import { Mousewheel,Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';


// define the slide index
var menu = ['AM','LO1', 'LO2', 'LO3','LO4','LO5']

// define prev and next buttons
const scrollDown = document.getElementsByClassName("scrollDown")[0];
const topsection = document.querySelector("nav")
const carouselSection = document.getElementsByClassName("swiper")[0];

window.addEventListener("scroll", toggleScrollButton);

//scrollbutton
function toggleScrollButton() {
    if (window.scrollY >= carouselSection.getBoundingClientRect().top) {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-up'></i>";
    } else {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-down'></i>";

    }
}
//scrollbutton call
scrollDown.addEventListener("click", scrollTarget);

//scrollbutton target function
function scrollTarget() {
    if (window.scrollY >= carouselSection.getBoundingClientRect().top) {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-down'></i>";
        autoScroll(topsection);
    } else {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-up'></i>";
        autoScroll(carouselSection);
    }
}

//scroll animation
function autoScroll(scrollTarget, offset = 0) {
  scrollTarget.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest", 
      easing: "ease-in-out"
  });
}


// swiper js
const swiper = new Swiper('.swiper', {
  modules: [Mousewheel,Pagination,Autoplay],
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  speed: 800,

  

  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },

  // If we need pagination
   pagination: {
    el: '.swiper-pagination', 
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
    },
    mousewheel: {
      sensitivity: 2,
      releaseOnEdges: true,
    },
  



  
});