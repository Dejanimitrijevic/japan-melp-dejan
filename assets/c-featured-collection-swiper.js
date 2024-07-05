    let featuredColumnsNumber = document.querySelector('.featured-columns-number').dataset.columnsNumber;
    let featuredColumnsNumberMobile = document.querySelector('.featured-columns-number-mobile').dataset.columnsNumberMobile;


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

 
  let looksSliderFeaturedOption = new Swiper('.horizontal_scroll_swiper', featuredOption);