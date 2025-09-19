document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.only-pc');
  let lastScrollY = 0;
  let isScrollingDown = false;
  let hideTimeout;

  const HIDE_DELAY = 200; 

  const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
          if (!isScrollingDown) {
              isScrollingDown = true;

              clearTimeout(hideTimeout);
              hideTimeout = setTimeout(() => {
                  navbar.style.top = '-70px'; 
              }, HIDE_DELAY);
          }
      } else {
          // 스크롤 올림
          isScrollingDown = false;
          navbar.style.top = '0'; 
          clearTimeout(hideTimeout); 
      }

      lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);
});

//----------------------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.querySelector('.mainimg');
  const mainTypo = document.querySelector('.main-typo');
  const maxScroll = 400; 
  const threshold = 200; 

  document.addEventListener('scroll', () => {
      const scrollY = window.scrollY; 

     
      if (scrollY < threshold) {
          mainImg.style.margin = `3rem auto`;
          mainImg.style.width = `100%`;
          mainImg.style.borderRadius = `0`;
          mainTypo.style.transform = 'scale(1)';
          return;
      }

      
      const scale = Math.min((scrollY - threshold) / (maxScroll - threshold), 1); // 0에서 1 사이 비율

      
      const margin = 3 - scale * 2; 
      const width = 100 - scale * 4; 
      const borderRadius = scale * 1; 

     
      mainImg.style.margin = `${margin}rem auto`;
      mainImg.style.width = `${width}%`;
      mainImg.style.borderRadius = `${borderRadius}rem`;

      const fontScale = 1 + scale * 0.5; 
      mainTypo.style.transform = `scale(${fontScale})`;
  });
});

//----------------------------------------------------------------------------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, 
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination-container .swiper-pagination",
    type: "progressbar", 
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { 
      slidesPerView: 1.2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination", 
        type: "bullets", 
        clickable: true,
      },
    },
    479: { 
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
      entry.target.classList.add('show');

      
      const staggerItems = entry.target.querySelectorAll('.stagger-item');
      staggerItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.classList.add('show');
      });

    
      observer.unobserve(entry.target);
    }
  });
},{
  root: null, 
  threshold: 0.1, 
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
  const mainBg = document.querySelector('.main-ingredient__bg'); 
  const lastBg = document.querySelector('.main-ingredient__list.last .main-ingredient__bg'); 

  const images = [
    'https://m.matinkim.com/images/project/20231113/20231113_01.jpg', 
    'https://m.matinkim.com/images/project/20241008/1.jpg',  
    'https://m.matinkim.com/images/project/20240416/02.jpg',  
    'https://m.matinkim.com/images/project/20241226/1.jpg',  
  ]; 

  const lastImages = [
    'https://m.matinkim.com/images/project/20231113/20231113_10.jpg',  
    'https://m.matinkim.com/images/project/20241008/3.jpg',  
    'https://m.matinkim.com/images/project/20240416/03.jpg', 
    'https://m.matinkim.com/images/project/20241226/7.jpg',  
  ];

  const positions = [
    '0','0','0','0 -1rem'
  ];

  const lastPositions = [
    '0','0','0 -1rem','0 -1rem',
];

  items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
       
      mainBg.style.backgroundImage = `url(${images[index]})`;

    
      lastBg.style.backgroundImage = `url(${lastImages[index]})`;
      lastBg.style.backgroundPosition = lastPositions[index]; 
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

 
  leftElement.querySelector('svg').style.transform = 'none';
  rightElement.querySelector('svg').style.transform = 'none';

  const handleScroll = () => {
      const windowHeight = window.innerHeight; 
      const leftElementPosition = leftElement.getBoundingClientRect().top; 
      const rightElementPosition = rightElement.getBoundingClientRect().top; 

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

 
  window.addEventListener('scroll', handleScroll);
});





