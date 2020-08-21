"use strict";

$(document).ready(function() {
    var url = "https://rebrickable.com/api/v3/lego/sets/?key=6785c31af2099b1eb28827b89028fb26&format=json&search=creator"
    $.getJSON(url, function(data) {
        var html = "";
        $.each(data.results, function(i, item) {
            html += "<h2>" + item.name + "</h2>";
            html += "<p>" + item.year + "</p>";
            html += "<img src=" + item.set_img_url + ">";
            html += "<p></p>";
            html += "<a href='" + item.set_url + "'>" + "Website</a>";
            html += "<p></p>";

        });

        $("#lego").html(html);

    })
});