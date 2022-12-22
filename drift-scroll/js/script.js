document.querySelectorAll('.slider').forEach((n,i) => {
    window[`slider${i+1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.5,
        slidesOffsetBefore: -120
    })
})

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
    })
})

bindSwipers(slider1, slider2, slider3, slider4)
