"use strict";
$(document).ready(function() {
    var user = getCookieByName("user");
    if (user === "") {
        $("#login").click(function() {
            var user = $("#user").val();

            if (user === "") {
                alert("Please enter a user name.");
                $("#user").focus();
            } else {
                setCookie("user", user);
                location.replace("login.html")
                    // go to login.html page

            }
        });
        $("#user").focus();
    } else {
        location.replace("login.html")
            // go to login.html page

    }
});