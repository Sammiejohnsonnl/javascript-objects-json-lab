(function(){ 
// start code
console.info("Hello JS"); 
const myNode = document.createElement("div");
const ddigitalClock = document.getElementById("digitalClock")
digitalClock.appendChild(myNode);
myNode.innerHTML = "Welcome";
// get time
const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    
};
setInterval(updateTime, 1000);
updateTime();

// end code
})();