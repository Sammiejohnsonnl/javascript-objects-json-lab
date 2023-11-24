(function(){ 
// start code
console.info("Hello JS"); 
const myNode = document.createElement("div");
const ddigitalClock = document.getElementById("digitalClock")
digitalClock.appendChild(myNode);
myNode.innerHTML = "Welcome";
// get time
const updateTime = function() {
    const updateTime = () => {
    console.info("tick tock");
  };
setInterval(updateTime, 1000);

const myDate = new Date();
console.dir(myDate);
myNode.innerHTML = myDate.toDateString();
}
// show only hours, minutes and seconds
myNode.innerHTML = myDate.toLocaleTimeString([], 
{ hour: "2-digit", minute: "2-digit", second: "2-digit" });


// end code
})();