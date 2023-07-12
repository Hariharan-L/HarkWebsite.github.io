// Hide header on scroll down
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
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}
window.onload = fadeOut;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})