function test() {
	console.log(this);
	this.myName = "Hark";
}
test();
console.log(window.myName);