"use strict";
var searchType = "media=music&";
var searchEntity = "entity=album&"
var searchCounry = "country=US&"
var searchLimit = "limit=20"
var urlDef = "https://itunes.apple.com/search?term="

$(document).ready(function() {
    $("#submit").click(function() {
        var userInput = $("#input").val();
        // console.log(userInput)
        var searchInput = encodeURIComponent(userInput)
        var inputToUrl = searchInput + "&";
        // console.log(inputToUrl)
        // create url with parameters
        var url = urlDef + inputToUrl + searchEntity + searchType +
            searchCounry + searchLimit
            // console.log(url);

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
                    html += "<h3> </h3>";
                    html += "<br></br>";
                    html += "<img src=" + item.artworkUrl100 + ">";
                    html += "<div>" + "<span>" + "Artist:    " + "</span>" +
                        "<a href='" + item.artistViewUrl + "'>" + item.artistName +
                        "</a>" + "</div>"
                    html += "<div>" + "<span>" + "Album:    " + "</span>" +
                        "<a href='" + item.collectionViewUrl + "'>" +
                        item.collectionName + "</a>" + "</div>";
                    html += "<div>" + "<span>" + "Price:     " + "</span>" +
                        item.collectionPrice + item.currency + "</div>";
                    html += "<div>" + "<span>" + "Genre:    " + "</span>" +
                        item.primaryGenreName + "</div>";
                });

                $("#music").html(html);
            })

    })
})