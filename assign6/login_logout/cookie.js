"use strict";
var getCookieByName = function(name) {
    var cookies = document.cookie;

    // get the index of the cookie name and equal sign
    var start = cookies.indexOf(name + "=");

    if (start === -1) { return ""; } // no cookie with that name
    else {

        start = start + (name.length + 1);
        var end = cookies.indexOf(";", start);
        if (end === -1) { end = cookies.length; }

        // use the start and end indexes to get the cookie value
        var cookieValue = cookies.substring(start, end);

        // return the decoded cookie value
        return decodeURIComponent(cookieValue);
    }
};

var setCookie = function(name, value, days) {
    // concatenate cookie name and encoded value
    var cookie = name + "=" + encodeURIComponent(value);

    // if there's a value for days, add max-age to cookie
    if (days !== undefined) {
        cookie += "; max-age=" + days * 24 * 60 * 60;
    }
    // add path to cookie and then set
    cookie += "; path=/";
    document.cookie = cookie;

};

var deleteCookie = function(name) {
    document.cookie = name + "=''; max-age=0; path=/";


};