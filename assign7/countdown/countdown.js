"use strict";

$(document).ready(function() {
    $("#countdown").click(function() {
        var event = new Event($("#event").val(), $("#date").val());

        // validation:
        if (event.inputMissing()) {
            $("#message").text(message.required());
            return;
        }
        if (event.invalidDate()) {
            $("#message").text(message.invalidDate());
            return;
        }

        //calculate
        event.calculateDays();

        //create and display message 
        if (event.days === 0) {
            $("#message").text(message.today(event));
        }

        if (event.days < 0) {
            $("#message").text(message.past(event));
        }

        if (event.days > 0) {
            $("#message").text(message.future(event));
        }
    });


    $("#event").focus();

});