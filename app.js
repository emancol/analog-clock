var secondsHand = document.getElementById('seconds-hand');
var minutesHand = document.getElementById('minutes-hand');
var hoursHand = document.getElementById('hours-hand');
function getTime() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    /* 360 / 60*/
    var timeInterval = 6;
    secondsHand.style.transform = "rotate(".concat(seconds * timeInterval, "deg)");
    minutesHand.style.transform = "rotate(".concat(minutes * timeInterval + seconds / 10, "deg)");
    hoursHand.style.transform = "rotate(".concat(hours * 30 + minutes / 2, "deg)");
}
setInterval(getTime, 1000);
