// import Swiper JS
import Swiper from 'swiper';
import { Mousewheel,Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import { EffectFlip } from 'swiper/modules';
import {Autoplay} from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

const menuButton = document.querySelector(".Menu-Dropdown");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-button");




// define the slide index
var menu = ['AM', 'LO1', 'LO2', 'LO3','LO4','LO5']

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    const swiper = new Swiper('.swiper', {
        modules: [Mousewheel,Pagination,EffectCoverflow,Autoplay,EffectFlip],
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 800,
        // direction: 'vertical',

        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },

        loop: true,

        effect : 'coverflow',
        coverflowEffect: {
            stretch: 0,
            depth: 850,
            modifier: 1,
            slideShadows: true,
            scale: 0.3,
        },

        mousewheel: {
        sensitivity: 2,
        releaseOnEdges: true,
        },



        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    document.addEventListener("DOMContentLoaded", function() {
        menuButton.addEventListener("click", function() {
        overlay.classList.toggle("active");
        });

        closeButton.addEventListener("click", function() {
            overlay.classList.remove("active");
        });
    });
}
  else{
    // false for not mobile device
    const swiper = new Swiper('.swiper', {
        modules: [Mousewheel,Pagination,EffectCoverflow,Autoplay],
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 800,

        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },

        loop: true,
        
        effect : 'coverflow',
        coverflowEffect: {
            stretch: 0,
            depth: 850,
            modifier: 1,
            slideShadows: true,
            scale: 0.3,
        },

        mousewheel: {
        sensitivity: 2,
        releaseOnEdges: true,
        },

        // If we need pagination
        pagination: {
        el: '.swiper-pagination', 
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
        },


        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },

    
    });
}