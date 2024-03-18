import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

let jurySwiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  activeIndex: 0,
  loop: true,
  slidesPerView: 1,
  initialSlide: 1,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      initialSlide: 6,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});

jurySwiper = document.querySelector('.swiper').swiper;

jurySwiper.slideNext();

