$(document).ready(function(){
    const swiper = new Swiper('.recommend-swiper', {
        // Optional parameters
        direction: 'horizontal', // 슬라이드방향 vertical 수직, horizontal 수평 
        loop: true, //반복 여부
        loopFillGroupWithBlank: true, //슬라이드 갯수 채우기(빈슬라이드 생성)
        slidesPerView: '3', // 한 슬라이드당 보여줄 갯수
        spaceBetween: 10, // 슬라이드 간격
        slidesPerGroup : 3, 
        autoplay: {
            delay: 2500, //시간설정
        },
        // 반응형
        breakPoints: {
          1280: {
            slidesPerView: '3',
            slidesPerGroup : 3, 
            spaceBetween: 10,
          },
          768: {
            slidesPerView: '2',
            slidesPerGroup : 2,
            spaceBetween: 10,
            },
        }, 
         // If we need pagination
         pagination: {
            el: '.swiper-pagination',
          },
        
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },     
      
   
    });
})