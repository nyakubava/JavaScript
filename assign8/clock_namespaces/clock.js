"use strict";
$(document).ready(function() {
    // create clock and stopwatch objects
    var clock = time.clock;
    clock.start($("#hours"), $("#minutes"), $("#seconds"), $("#ampm"));
    // start clock
    time.clock.start;

    // set up stopwatch event handlers
    $("#start").click(function() {
        time.stopwatch.start($("#s_minutes"), $("#s_seconds"), $("#s_ms"));
    });
    $("#stop").click(function() {
        time.stopwatch.stop();
    });
    $("#reset").click(function() {
        time.stopwatch.reset();
    });
}); // end ready()