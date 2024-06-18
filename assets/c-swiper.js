    let sliderRangeDelay = document.querySelector('.slider_range_delay').dataset.sliderRangeDelay;
    let fadeEffectSpeed = document.querySelector('.fade_effect_speed').dataset.fadeEffectSpeed;

    let featuredColumnsNumber = document.querySelector('.featured-columns-number').dataset.columnsNumber;
    console.log("featuredColumnsNumber", featuredColumnsNumber)


  let featuredOption = {
        // Optional parameters
    loop: true,
    slidesPerView: featuredColumnsNumber,
    spaceBetween: 35,
    centeredSlides: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

let looksSliderFeaturedOption = new Swiper('.swiper-featured-collection', featuredOption);
let looksSliderFadeBannerOption = new Swiper('.swiper-fade-banner', fadeBannerOption);