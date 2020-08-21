"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
var padSingleDigit = function(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
};

function displayCurrentTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = padSingleDigit(today.getMinutes());
    var sec = padSingleDigit(today.getSeconds());

    if (hour >= 12) {
        hour = hour - 12;
        hour = padSingleDigit(hour);
        document.getElementById("hours").innerHTML = hour;
        document.getElementById("minutes").innerHTML = minute;
        document.getElementById("seconds").innerHTML = sec;
        document.getElementById("ampm").innerHTML = "PM";
    } else {
        hour = padSingleDigit(hour);
        document.getElementById("hours").innerHTML = hour;
        document.getElementById("minutes").innerHTML = minute;
        document.getElementById("seconds").innerHTML = sec;
        document.getElementById("ampm").innerHTML = "AM";
    }
};
setInterval(displayCurrentTime, 1000);



window.onload = displayCurrentTime;

// set initial clock display and then set interval timer to display
// new time every second. Don't store timer object because it 
// won't be needed - clock will just run.