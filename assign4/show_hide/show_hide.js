"use strict";
$(document).ready(function() {
    $("#jdom a").click(function(evt) {
        $(this).prev().toggleClass("hide");
        //    remove /add class and change text
        if ($(this).hasClass("hide")) {
            $(this).text("Show more");
            ($(this)).removeClass('hide')
        } else {
            $(this).text("Show less");
            ($(this)).addClass('hide')
        }
        evt.preventDefault();

    });
});