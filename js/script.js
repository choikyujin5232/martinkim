document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.only-pc');
  let lastScrollY = 0;
  let isScrollingDown = false;
  let hideTimeout;

  const HIDE_DELAY = 200; // 네비게이션 바가 고정되는 시간 (ms)

  const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
          // 스크롤 내림
          if (!isScrollingDown) {
              isScrollingDown = true;

              // 일정 시간 후 네비게이션 바 숨김
              clearTimeout(hideTimeout);
              hideTimeout = setTimeout(() => {
                  navbar.style.top = '-70px'; // 화면 위로 숨김
              }, HIDE_DELAY);
          }
      } else {
          // 스크롤 올림
          isScrollingDown = false;
          navbar.style.top = '0'; // 네비게이션 바 보임
          clearTimeout(hideTimeout); // 타이머 초기화
      }

      lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);
});

//----------------------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.querySelector('.mainimg');
  const mainTypo = document.querySelector('.main-typo');
  const maxScroll = 400; // 최대 스크롤 기준값
  const threshold = 200; // 임계값 (50px 이상 스크롤 시 작동)

  document.addEventListener('scroll', () => {
      const scrollY = window.scrollY; // 현재 스크롤 값

      // 임계값 이하일 때 초기 상태 유지
      if (scrollY < threshold) {
          mainImg.style.margin = `3rem auto`;
          mainImg.style.width = `100%`;
          mainImg.style.borderRadius = `0`;
          mainTypo.style.transform = 'scale(1)';
          return;
      }

      // 임계값을 초과한 경우 애니메이션 계산
      const scale = Math.min((scrollY - threshold) / (maxScroll - threshold), 1); // 0에서 1 사이 비율

      // 여백 및 스타일 계산
      const margin = 3 - scale * 2; // 3rem에서 1rem까지 줄어듦
      const width = 100 - scale * 4; // 100%에서 96%로 줄어듦
      const borderRadius = scale * 1; // 0rem에서 1rem까지 증가

      // 동적으로 스타일 적용
      mainImg.style.margin = `${margin}rem auto`;
      mainImg.style.width = `${width}%`;
      mainImg.style.borderRadius = `${borderRadius}rem`;

      const fontScale = 1 + scale * 0.5; // 기본 크기에서 50% 더 커짐
      mainTypo.style.transform = `scale(${fontScale})`;
  });
});

//----------------------------------------------------------------------------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // 기본값 (PC 및 태블릿)
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination-container .swiper-pagination",
    type: "progressbar", // 기본적으로 프로그레스바 스타일
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { // 0px ~ 478px (모바일 설정)
      slidesPerView: 1.2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination", // **여기 반드시 명시**
        type: "bullets", // 점 스타일 페이지네이션
        clickable: true,
      },
    },
    479: { // 479px 이상 (PC 및 태블릿)
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});







//----------------------------------------------------------------------------------------------------------------------------


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 부모 요소에 .show 클래스 추가
      entry.target.classList.add('show');

      // 자식 요소에 순차적인 딜레이 적용
      const staggerItems = entry.target.querySelectorAll('.stagger-item');
      staggerItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.classList.add('show');
      });

      // 부모 요소의 관찰 중지
      observer.unobserve(entry.target);
    }
  });
},{
  root: null, // 뷰포트를 기준으로
  threshold: 0.1, // 요소가 10% 보여지면 감지
});


// 부모 요소 감지 시작
const animateElements = document.querySelectorAll('.animate-on-scroll');
animateElements.forEach(el => observer.observe(el));

//---------------------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
  const boxObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show2');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.001,
  });

  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => boxObserver.observe(box));
});

//---------------------------------------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function(){
  const items = document.querySelectorAll('.main-ingredient__index-item');
  const mainBg = document.querySelector('.main-ingredient__bg'); // 첫 번째 배경
  const lastBg = document.querySelector('.main-ingredient__list.last .main-ingredient__bg'); // 두 번째 배경

  const images = [
    'https://m.matinkim.com/images/project/20231113/20231113_01.jpg', // 첫 번째 이미지
    'https://m.matinkim.com/images/project/20241008/1.jpg',  // 두 번쩨 이미지
    'https://m.matinkim.com/images/project/20240416/02.jpg',  // 세 번째 이미지
    'https://m.matinkim.com/images/project/20241226/1.jpg',  // 네 번째 이미지
  ]; 

  const lastImages = [
    'https://m.matinkim.com/images/project/20231113/20231113_10.jpg',  // 첫 번째 이미지
    'https://m.matinkim.com/images/project/20241008/3.jpg',  // 두 번째 이미지
    'https://m.matinkim.com/images/project/20240416/03.jpg',  // 세 번째 이미지
    'https://m.matinkim.com/images/project/20241226/7.jpg',  // 네 번째 이미지
  ];

  const positions = [
    '0','0','0','0 -1rem'
  ];

  const lastPositions = [
    '0','0','0 -1rem','0 -1rem',
];

  items.forEach((item, index) => {
    // 각 main-ingredient__index-item 요소에 대해 이벤트 추가
    item.addEventListener('mouseover', () => {
       // 첫 번째 배경 변경
      mainBg.style.backgroundImage = `url(${images[index]})`;

      // 두 번째 배경 변경
      lastBg.style.backgroundImage = `url(${lastImages[index]})`;
      lastBg.style.backgroundPosition = lastPositions[index]; // 위치 설정
      mainBg.style.backgroundPosition = positions[index];
    });
  });
})


//---------------------------------------------------------------------------------------------------------------------------

window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.scroll-move');
  elements.forEach((el) => {
      if (el.classList.contains('footer__extend-parenthesis-left')) {
          el.classList.toggle('left', window.scrollY > 50);
      } else if (el.classList.contains('footer__extend-parenthesis-right')) {
          el.classList.toggle('right', window.scrollY > 50);
      }
  });
});

//---------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const leftElement = document.querySelector('.footer__extend-parenthesis-left');
  const rightElement = document.querySelector('.footer__extend-parenthesis-right');

  // SVG 초기화
  leftElement.querySelector('svg').style.transform = 'none';
  rightElement.querySelector('svg').style.transform = 'none';

  const handleScroll = () => {
      const windowHeight = window.innerHeight; // 화면 높이
      const leftElementPosition = leftElement.getBoundingClientRect().top; // 왼쪽 요소의 위치
      const rightElementPosition = rightElement.getBoundingClientRect().top; // 오른쪽 요소의 위치

      // 화면 안에 요소가 보일 경우 애니메이션 클래스 추가
      if (leftElementPosition < windowHeight && leftElementPosition > 0) {
          leftElement.classList.add('scrolled-left');
      } else {
          leftElement.classList.remove('scrolled-left');
      }

      if (rightElementPosition < windowHeight && rightElementPosition > 0) {
          rightElement.classList.add('scrolled-right');
      } else {
          rightElement.classList.remove('scrolled-right');
      }
  };

  // 스크롤 이벤트 연결
  window.addEventListener('scroll', handleScroll);
});





