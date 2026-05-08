var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spacebetween: 30,
    grabcursor: true,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 4
        },
    }
});