    let sliderRangeDelay = document.querySelector('.slider_range_delay').dataset.sliderRangeDelay;
    let fadeEffectSpeed = document.querySelector('.fade_effect_speed').dataset.fadeEffectSpeed;

  let fadeBannerOption = {
        slidesPerView: 1,
        effect: 'fade',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: sliderRangeDelay,
        },
        speed: fadeEffectSpeed
  }

  let looksSliderFadeBannerOption = new Swiper('.swiper-fade-banner', fadeBannerOption);