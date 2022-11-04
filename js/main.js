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

const modalList = document.querySelector('.modal__list');

const modal2 = document.querySelector('.modal-2');
const openModal2 = document.querySelector('.open-modal-2');
const modal2bg = document.querySelector('.modal-2__bg');

const openModalfunction = function () {
    body.classList.add('no-scroll');
    modalOverlay.classList.remove('hidden');
}

const closeModalfunction = function () {
    body.classList.remove('no-scroll');
    modalOverlay.classList.add('hidden');
}

openModal.addEventListener('click', function () {
    modal.classList.remove('hidden');
    openModalfunction();
    modalList.classList.add('modal__list--active');
});


openModal2.addEventListener('click', function () {
    modal2.classList.add('modal-2__active');
    body.classList.add('no-scroll');
});

modalOverlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    closeModalfunction();
    modalList.classList.remove('modal__list--active');
});

modal2bg.addEventListener('click', function () {
    closeModalfunction();
    modal2.classList.remove('modal-2__active');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');

        closeModalfunction();
    }
})

window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal2.classList.contains('modal-2__active')) {
        modal2.classList.remove('modal-2__active');
        closeModalfunction();
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








