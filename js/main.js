

// var slider1= new Swiper('.slider1', {
//   spaceBetween: 30,
//   effect: 'fade',
//   centeredSlides: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

var slider1 = new Swiper('.slider1', {
      slidesPerView: 1,
      spaceBetween: 30,
      effect:'fade',
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      }
    });

// ふたつ目のスライドショー
var slider2 = new Swiper('.slider2', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      }
    });