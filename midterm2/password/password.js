// 04/17/2020 

"use strict";
$(document).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };

    $("#generate").click(function() {
        $("#password").val(""); // clear previous entry
        var password = "";
        var num = parseInt($("#num").val());
        if (num < 8 || num > 20) {
            alert("Please enter a valid length 8-20");
        } else {
            //loop for generator of password with unique symbols
            do {
                password = passwordGenerator(num)
            }
            while (isNotUnique(password));
            $("#password").val(password);
        }
    });


    // function for generator 
    function passwordGenerator(num) {
        var first, second, char;
        var new_password = "";
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        for (var i = 0; i < num; i++) {
            first = getRandomNumber(chars.length);
            second = first + 1;
            char = chars.substring(first, second);
            new_password = new_password += char;
        };
        return new_password;
    }
    // check if password has no unique symbols
    function isNotUnique(string) {
        var i, ch;
        var len = string.length;
        for (i = 0; i < len; i++) {
            ch = string[i];
            if (string.indexOf(ch, i + 1) > -1) {
                return true;
            }
        }
        return false;
    }


    $("#clear").click(function() {
        $("#num").val("");
        $("#password").val("");
        $("#num").focus();
    }); // end click()

    // set focus on initial load
    $("#num").focus();

});
// end ready()