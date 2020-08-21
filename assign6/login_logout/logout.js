"use strict";
$(document).ready(function() {
    var user = getCookieByName("user");
    $("#name").text(user);

    $("#logout").click(function() {
        deleteCookie("user");
        // go to initial page
        location.replace("index.html")

    });

    $("#logout").focus();
});