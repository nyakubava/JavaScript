"use strict";


var utility = myapp.utility;
var time = myapp.time;

time.clock = (function() {
    var hourSpan, minuteSpan, secondSpan, ampmSpan;
    // var padSingleDigit = function(num) {
    //     return (num < 10) ? "0" + num : num;
    // };

    var displayCurrentTime = function() {
        var now = new Date();
        var hours = now.getHours();
        var ampm = "AM"; // set default value

        // correct hours and AM/PM value for display
        if (hours > 12) { // convert from military time
            hours = hours - 12;
            ampm = "PM";
        } else { // adjust 12 noon and 12 midnight
            switch (hours) {
                case 12: // noon
                    ampm = "PM";
                    break;
                case 0: // midnight
                    hours = 12;
                    ampm = "AM";
            }
        }
        // diplay time
        hourSpan.text(hours);
        minuteSpan.text(utility.padSingleDigit(now.getMinutes()));
        secondSpan.text(utility.padSingleDigit(now.getSeconds()));
        ampmSpan.text(ampm);
    };

    // public methods
    return {
        start: function(hSpan, mSpan, sSpan, aSpan) {
            hourSpan = hSpan;
            minuteSpan = mSpan;
            secondSpan = sSpan;
            ampmSpan = aSpan;

            // set initial clock display and then set interval timer to display
            // new time every second (1000 milliseconds). Don't store timer object
            // because it won't be needed - clock will just run.
            displayCurrentTime();
            setInterval(displayCurrentTime, 1000);
            return this;
        }
    };
})();