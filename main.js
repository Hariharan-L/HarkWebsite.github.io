const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classlist.toggle("sticky", window.scrollY > 0);
});