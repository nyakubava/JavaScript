"use strict"

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var averageScore = 0
var highestScore = 0

var $ = function(id) {
    return document.getElementById(id);
};

var addScore = function() {
    var name = $("name").value;
    var score = parseInt($("score").value);
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score")
    } else {
        names[names.length] = $("name").value;
        scores[scores.length] = parseInt($("score").value);
        $("name").value = "";
        $("score").value = "";
        $("name").focus();
    };

};
var displayResults = function() {
    var sum = 0;
    var name = names[0];
    var highestScore = scores[0]
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            name = names[i];
        }
        sum = sum + scores[i];
        var averageScore = (sum / scores.length).toFixed(0);
        // var highestScore = Math.max(scores);

        var res = "<tr><h2>Results</h2></tr><p> Average Score = " + averageScore +
            "</p><p>High Score = " + name + " with a score of " + highestScore + "</p>";

        $('results').innerHTML = res;
    };
};

var displayScores = function() {
    // var table = $("scores_table");
    var res = "<tr><td colspan='2'><h2>Scores</h2></td></tr> \
			<tr><td><b>Name</b></td><td><b>Score</b></td></tr>";
    for (var i = 0; i < scores.length; i++) {
        res = res + "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>"

    }
    $('scores_table').innerHTML = res;
};

window.onload = function() {
    $("name").focus();
    $("add").onclick = addScore;
    $("name").focus();
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};