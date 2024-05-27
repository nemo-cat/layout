$(document).ready(function(){
    const slideSwiper = new Swiper('.slide-swiper', {
        // Optional parameters
       direction: 'horizontal', // 슬라이드방향 vertical 수직, horizontal 수평 
        loop: true, //반복 여부
        loopFillGroupWithBlank: true, //슬라이드 갯수 채우기(빈칸으로 채워줌)
        slidesPerView: '1', // 한 슬라이드당 보여줄 갯수
        autoplay: {
            delay: 2500, //시간설정
        },
        pagination: {
          el: '.slide-swiper-pagination',
        },
        navigation: {
          nextEl: '.slide-swiper-next',
          prevEl: '.slide-swiper-prev',
        },
      
    });


    const discountSwiper = new Swiper('.discount-swiper', {
       direction: 'horizontal', // 슬라이드방향 vertical 수직, horizontal 수평 
        loop: true, //반복 여부
        loopFillGroupWithBlank: true, //슬라이드 갯수 채우기(빈칸으로 채워줌)
        slidesPerView: '4', // 한 슬라이드당 보여줄 갯수
        spaceBetween: 20, // 슬라이드 간격
        autoplay: {
            delay: 2500, //시간설정
        },
        navigation: {
            nextEl: '.discount-swiper-next',
            prevEl: '.discount-swiper-prev',
         }
    });
})