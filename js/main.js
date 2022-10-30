//slider-swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 15,

    breakpoints: {
        // when window width is >= 480px

        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        720: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        960: {
            slidesPerView: 4,
            spaceBetween: 10,
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },

});



const body = document.querySelector('body');

//modal-window
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const modalOverlay = document.querySelector('.modal__overlay');

const modalTwo = document.querySelector('.media-modal');
const openMediaModal = document.querySelector('.open-media-modal');

openModal.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
    body.classList.add('no-scroll');
});

openMediaModal.addEventListener('click', function () {
    modalTwo.classList.add('media-modal__active');
    modalOverlay.classList.remove('hidden');
    body.classList.add('no-scroll');
});

modalOverlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
    body.classList.remove('no-scroll');
});

modalOverlay.addEventListener('click', function () {
    modalTwo.classList.remove('media-modal__active');
    modalOverlay.classList.add('hidden');
    body.classList.remove('no-scroll');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        modalOverlay.classList.add('hidden');
        body.classList.remove('no-scroll');
    }
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalTwo.classList.contains('hidden')) {
        modalTwo.classList.remove('media-modal__active');
        modalOverlay.classList.add('hidden');
        body.classList.remove('no-scroll');
    }
})

//burger-menu

const menuBtn = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');

const menuLinks = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('menu__burger--active');
    menuList.classList.toggle('menu__list--active');
})

menuLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        menuBtn.classList.remove('menu__burger--active');
        menuList.classList.remove('menu__list--active');
    })
})








