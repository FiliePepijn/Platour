// import Swiper JS
import Swiper from 'swiper';
import { Mousewheel,Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';


// define the slide index
let slideindex = 0;

// define prev and next buttons
const buttonPrev = document.querySelector(".carousel-button-prev");
const buttonNext = document.querySelector(".carousel-button-next");
const scrollDown = document.getElementsByClassName("scrollDown")[0];
const topsection = document.querySelector("nav")
const carouselSection = document.getElementsByClassName("swiper")[0];

window.addEventListener("scroll", toggleScrollButton);

function toggleScrollButton() {
    if (window.scrollY >= carouselSection.getBoundingClientRect().top) {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-up'></i>";
    } else {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-down'></i>";

    }
}

scrollDown.addEventListener("click", scrollTarget);

function scrollTarget() {
    if (window.scrollY >= carouselSection.getBoundingClientRect().top) {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-down'></i>";
        autoScroll(topsection);
    } else {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-up'></i>";
        autoScroll(carouselSection);
    }
}

function autoScroll(scrollTarget, offset = 0) {
  scrollTarget.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest", 
      easing: "ease-in-out"
  });
}



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  followFinger: true,
  speed: 600,

  modules: [Mousewheel,Pagination],

  mousewheel: {
    sensitivity: 2,
    releaseOnEdges: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination', 
    type: 'progressbar',
  },

  preventClicks: false,
  preventClicksPropagation: false,



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  
});