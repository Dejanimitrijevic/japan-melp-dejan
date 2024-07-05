document.addEventListener('DOMContentLoaded', () => {
  let upsellproductOption = {
    // Optional parameters
    slidesPerView: 2.5,
    spaceBetween: 15,
    centeredSlides: false,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 87,
    },
    mousewheel: false,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
    }
  }
  let looksUpsellProductOption = new Swiper('.upsell-productitems', upsellproductOption);
})