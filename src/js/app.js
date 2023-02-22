import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// import header from './header.js';
// header();

import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 3500,
    // },
    pagination: {
        el: '.swiper-pagination',
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});

const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination1',
    },
});

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination2',
    },
});

const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination3',
    },
});

const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination4',
    },
});

// Бургер меню

let burgerBnt = document.querySelector('.header_burger_btn');
let headerBurger = document.querySelector('.header_burger');
let headerBurgerBtn = document.querySelector('.header_burger_btn');
const body = document.querySelector('body');
const main = document.querySelector('main');

burgerBnt.onclick = function () {
    headerBurgerBtn.classList.toggle('header_burger_btn-toggle');
    headerBurger.classList.toggle('header_burger-open');
    body.classList.toggle('body_lock');
    main.classList.toggle('opacity1');
};

let madalWrap = document.querySelector('.body_modal_wrap');
let modal_call_block = document.querySelector('.modal_call_block');
let headerCallIcon = document.querySelector('.header_call_icon');

headerCallIcon.onclick = function () {
    body.classList.add('body_lock');
    madalWrap.classList.add('body_modal_wrap--active');
    modal_call_block.classList.add('modal_call_block--active');
};
madalWrap.onclick = function () {
    body.classList.remove('body_lock');
    madalWrap.classList.remove('body_modal_wrap--active');
    modal_call_block.classList.remove('modal_call_block--active');
};


// LIST / MAP - TOGGLE FUNCTION

// let toggleBtnList = document.querySelector('.--list');
// let toggleBtnMap = document.querySelector('.--map');
// let listBlok = document.querySelector('.offices_wrap');
// let mapBlock = document.querySelector('.google_map_wrap')

// toggleBtnList.onclick = function () {
//     toggleBtnList.classList.add('--list-active');
//     toggleBtnMap.classList.remove('--map-active');
//     listBlok.classList.remove('hidden');
//     mapBlock.classList.add('hidden');
// };
// toggleBtnMap.onclick = function () {
//     toggleBtnMap.classList.add('--map-active');
//     toggleBtnList.classList.remove('--list-active');
//     mapBlock.classList.remove('hidden');
//     listBlok.classList.add('hidden');
// };

// плаваюча шапка
// const start = 200;
// const start = 100;
const headerHeight = document.querySelector('header').getBoundingClientRect().height;
const header = document.querySelector('.header_wraper');
const mainePage = document.querySelector('.maine');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('nav_fix');
const headerTitleHeight = document.querySelector('.maine').getBoundingClientRect().height;
// console.log(allheader.getBoundingClientRect().height);
// console.log(headerHeight);


// Стікі елементи

const sticky = document.querySelectorAll('.--sticky_title');
const stickyWrap = document.querySelectorAll('.sticky_wraper');
let headrMenuHeight = document.querySelector('.header').getBoundingClientRect().height - 1;

function animSticky() {
    for (let items of sticky) {
        let stickyPosition = items.getBoundingClientRect().top;

        if (stickyPosition == headrMenuHeight) {
            items.classList.add('--sticky_title-fix');

        }
        else if (stickyPosition > headrMenuHeight || stickyPosition < headrMenuHeight) {
            items.classList.remove('--sticky_title-fix');
        }
    }
    for (let items of stickyWrap) {
        let stickyPosition = items.getBoundingClientRect().top;

        if (stickyPosition == headrMenuHeight) {
            items.classList.add('sticky_wraper-fix');

        }
        else if (stickyPosition > headrMenuHeight || stickyPosition < headrMenuHeight) {
            items.classList.remove('sticky_wraper-fix');
        }
    }
}


window.addEventListener('scroll', () => {
    animSticky();
    if (scrollPosition() > headerHeight - headerTitleHeight && !containHide()) {
        header.classList.add('nav_fix');
        setTimeout(function () { header.classList.add('nav_fix_anim') }, 10);
        mainePage.classList.add('maine_fix_header');
    }

    else if (scrollPosition() < headerHeight - headerTitleHeight && containHide()) {
        setTimeout(function () { header.classList.remove('nav_fix_anim') }, 10);
        header.classList.remove('nav_fix');
        mainePage.classList.remove('maine_fix_header');
    }
})
