(function(){ 
// start code
console.info("Hello JS"); 
const myNode = document.createElement("div");
const ddigitalClock = document.getElementById("digitalClock")
digitalClock.appendChild(myNode);
myNode.innerHTML = "Welcome";

const myDate = new Date();
console.dir(myDate);

// end code
})();