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

const swiper = new Swiper('.swiper', {
    modules: [Mousewheel, Pagination, Autoplay],
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 800,

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },

    loop: true,

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
