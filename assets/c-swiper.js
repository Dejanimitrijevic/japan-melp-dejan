    let sliderRangeDelay = document.querySelector('.slider_range_delay').dataset.sliderRangeDelay;
    let fadeEffectSpeed = document.querySelector('.fade_effect_speed').dataset.fadeEffectSpeed;

    let featuredColumnsNumber = document.querySelector('.featured-columns-number').dataset.columnsNumber;
    let featuredColumnsNumberMobile = document.querySelector('.featured-columns-number-mobile').dataset.columnsNumberMobile;
    console.log("featuredColumnsNumberMobile", featuredColumnsNumberMobile)


  let featuredOption = {
        // Optional parameters
    loop: true,
    slidesPerView: featuredColumnsNumber,
    spaceBetween: 35,
    centeredSlides: false,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 87,
    },
    mousewheel: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: featuredColumnsNumberMobile,
          spaceBetween: 16,
       },
       767: {
        slidesPerView: featuredColumnsNumber - 1,
         spaceBetween: 24,
       },
       1024: {
        slidesPerView: featuredColumnsNumber,
         spaceBetween: 35,
       },
  }
}

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

let looksSliderFeaturedOption = new Swiper('.horizontal_scroll_swiper', featuredOption);
let looksSliderFadeBannerOption = new Swiper('.swiper-fade-banner', fadeBannerOption);