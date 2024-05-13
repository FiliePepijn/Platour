// import Swiper JS
import Swiper from 'swiper';
import { Mousewheel,Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import {Autoplay} from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { effectInit } from 'swiper/effect-utils';
import { modelScale } from 'three/examples/jsm/nodes/Nodes.js';


// define the slide index
var menu = ['AM', 'LO1', 'LO2', 'LO3','LO4','LO5']



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