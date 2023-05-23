import Swiper from "swiper";

import SwiperCore, { Pagination } from "swiper/core";

// configure Swiper to use modules
SwiperCore.use(Pagination);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
