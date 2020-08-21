// 03/19/2020

"use strict";
$(document).ready(function() {
    $("#categories h2").click(function() {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();
        } else {
            $(this).next().show();
        }

        $("#image").attr("src", "");
    });

    // preload images	

    $("#web_images a, #java_images a, #net_images a, #database_images a").each(function() {
        var bookImage = new Image();

        var imageURL = $(this).attr("href");
        bookImage.src = imageURL;

        $(this).click(function(evt) {
            $("#image").attr("src", imageURL);

            // cancel 
            evt.preventDefault();
        });
    });
}); // end ready