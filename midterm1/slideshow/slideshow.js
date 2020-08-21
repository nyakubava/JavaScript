// user_name
// CIS 114 OLH 
// slideshow.js
// Midterm 1
// 03/06/2020 

"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var imageCache = [];
var imageCounter = 0;
var timer;

var runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    var image = imageCache[imageCounter];
    $("image").src = image.src;
    $("caption").firstChild.nodeValue = image.title;
};

window.onload = function() {
    var listNode = $("image_list"); // the ul element
    var links = listNode.getElementsByTagName("a");

    // Preload image, copy title properties, and store in array
    var i, link, image;
    for (i = 0; i < links.length; i++) {
        link = links[i];
        image = new Image();
        image.src = link.getAttribute("href");
        image.title = link.getAttribute("title");
        imageCache[imageCache.length] = image;
    }

    // Attach start and pause event handlers
    $("start").onclick = function() {
        runSlideShow();
        //set timer 2 sec
        timer = setInterval(runSlideShow, 2000);
        // disable start and enable pause buttons
        $("start").setAttribute("disabled", "true");
        $("pause").removeAttribute("disabled");
        $("btnNext").setAttribute("disabled", "true");
        $("btnPrevious").setAttribute("disabled", "true");

    };

    $("pause").onclick = function() {
        //cancel timer    
        clearInterval(timer);
        //disable pause and enable start buttons
        $("pause").setAttribute("disabled", "true");
        $("start").removeAttribute("disabled");
        $("btnPrevious").removeAttribute("disabled");
        $("btnNext").removeAttribute("disabled");


    };
    $("btnNext").onclick = function() {

        imageCounter = (imageCounter + 1) % imageCache.length;
        image = imageCache[imageCounter];
        $("image").src = image.src;
        $("caption").firstChild.nodeValue = image.title;
        $("btnPrevious").removeAttribute("disabled");
        if (imageCounter == imageCache.length - 1) {
            $("btnNext").setAttribute("disabled", "true");
        }

    }
    $("btnPrevious").onclick = function() {

        imageCounter = (imageCounter - 1) % imageCache.length;
        image = imageCache[imageCounter];
        $("image").src = image.src;
        $("caption").firstChild.nodeValue = image.title;
        $("btnNext").removeAttribute("disabled");
        if (imageCounter == 0) {
            $("btnPrevious").setAttribute("disabled", "true")
        }
    };



};