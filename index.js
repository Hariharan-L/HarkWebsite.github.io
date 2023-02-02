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
 
