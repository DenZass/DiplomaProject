import "../js/components/CommitCard.js";
import "../js/components/GithubApi.js";
import "../js/components/CommitCardList.js";

import Swiper from 'swiper';

var appendNumber = 4;
var prependNumber = 1;

export var swiper = new Swiper('.swiper-container', {


    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        // type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 10,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        //   centeredSlides: true
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        //   centeredSlides: true,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2 ,
          spaceBetween: 10,
        // //   centeredSlides: true,
        // //   clickable: true,
        },
        920: {
          slidesPerView: 3 ,
          spaceBetween: 10,
        // //   centeredSlides: true,
        // //   clickable: true,
        }

      },    
});

// document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.prependSlide([
//         '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
//         '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
//     ]);
// });
// document.querySelector('.prepend-slide').addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
// });
// document.querySelector('.append-slide').addEventListener('click',
// function (e) {
//     e.preventDefault();
//     swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
// }
// );
// document.querySelector('.append-2-slides').addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.appendSlide([
//         '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
//         '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
//     ]);
// });


