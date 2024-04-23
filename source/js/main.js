// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import {onBurgerButton, onLinkClick} from './modules/burger';
import './modules/hero';
import {addTabindexBullets} from './modules/hero';
import './modules/tours';
import {addTabindexButtons} from './modules/tours';


onBurgerButton();
onLinkClick();
addTabindexBullets();
addTabindexButtons();
