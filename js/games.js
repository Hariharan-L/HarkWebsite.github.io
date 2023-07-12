var lastScrollTop = 0; 
onload = document.getElementById("onload");
window.addEventListener("scroll",function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    onload.style.top = "-113px";
  }
  else{
    onload.style.top="0";
  }
  lastScrollTop = scrollTop;
})
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      autoplay:
      {
        delay:3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1068: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      },
    });
    swiperEl.initialize();
window.onload = fadeOut;
