var text_fortune = ["Riches are coming your way!",
										"Be careful of financial misfortune!",
										"Beware of friends moving away!",
										"Squad goals will be achieved!",
										"You will be powerful beyond your wildest dreams!"
										];

var currentFortune = 0;
var fortuneNum = 0;
var timeOut = false;


function getFortune(){

if(timeOut) return;
var audio = new Audio ("fsound.mp3");
audio.play()

var div = document.getElementById("fortune gif");

div.innerHTML = "";

var image = document.createElement("img");

var text = document.getElementById("fortune text")

while(currentFortune == fortuneNum) {
  fortuneNum = Math.floor(Math.random() * 5) +1;
}

currentFortune = fortuneNum;
text.innerHTML = text_fortune[fortuneNum -1];

image.src = "fortunes/" + fortuneNum + ".gif";

div.appendChild(image);
timeOut = true;
setTimeout(function() {timeOut = false}, 4000);
}