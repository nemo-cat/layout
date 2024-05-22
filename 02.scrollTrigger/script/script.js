gsap.registerPlugin(ScrollTrigger);

let imgBox = gsap.utils.toArray('.img-box ul li');
let textList = gsap.utils.toArray('.text-box ul li');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec02',
        start: 'top top',
        end: '+=500%', //시작부분에서 500%까지 스크롤한 후 종료
        pin: true, // sec02 영역 고정
        scrub: 3,
        markers: true,
    }
})

tl.from(imgBox, {
    y: '400%',
    duration: 5,
    stagger: 5, // 애니메이션에 시간차를 줌
    ease: 'none'
})
tl.to(textList, {
    color: 'rgb(68, 126, 151)',
    fontSize: '21px',
    duration: 5,
    stagger: 5, // 애니메이션에 시간차를 줌
    ease: 'none'
},0) //딜레이없이 앞의 애니메이션과 동시에 실행