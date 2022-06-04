// $('.your-class').slick({

//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });


  // owl js

  $('.owl-carousel').owlCarousel({
    infinite: true,
    autoplay:true,
    dots:true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2,
            dots:false
        },
        600:{
            items:4,
            dots:false
        },
        1000:{
            items:5
        }
    }
})
