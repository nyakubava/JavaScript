"use strict";
var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=90db7974d4102361a983914c389e058f"
var img = "https://image.tmdb.org/t/p/w300"

fetch(url)
    // .then(result => console.log(result))
    .then(function(response) {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        // console.log(response.json)
        return response.json();
    })
    .then(function(json) {
        var html = "";
        $.each(json.results, function(i, item) {
            html += "<hr align='center' width=550 color='black' />"
            html += "<br></br>";
            html += "<div class='col-1'>" + "<img src=" +
                img + item.poster_path + ">" + "</div>";
            html += "<div class='col-2'>" + "<span>" + "Title: " +
                "</span>" + item.title + "</div>";
            html += "<div>" + "<span>" + "Release Date: " +
                "</span>" + item.release_date + "</div>";
            html += "<div>" + "<span>" + "Rating: " + "</span>" +
                item.vote_average + "</div>";
            html += "<div>" + "<span>" + "Overview: " + "</span>" +
                item.overview + "</div>";
            html += "<br></br>";

        });

        $("#movie").html(html);
    });