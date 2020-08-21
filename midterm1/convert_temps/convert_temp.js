"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
    $("degrees_entered").focus();

};


var toFahrenheit = function() {
    if ($("to_fahrenheit").checked) {
        $("degree_label_1").innerHTML = "Enter C degrees:";
        $("degree_label_2").innerHTML = "Degrees Fahrenheit:";

    }
    clearTextBoxes();
}
var toCelsius = function() {
    if ($("to_celsius").checked) {
        $("degree_label_1").innerHTML = "Enter F degrees:";
        $("degree_label_2").innerHTML = "Degrees Celsius:";

    }
    clearTextBoxes();
}
var convertTemp = function() {
    var fahrenheit;
    var celsius;


    if ($("to_celsius").checked) {

        fahrenheit = $("degrees_entered").value;
        if (isNaN(fahrenheit)) {
            alert("You must enter a valid number for degrees.");
            clearTextBoxes();
        } else {
            fahrenheit = parseFloat(fahrenheit);
            fahrenheit = (fahrenheit - 32) * (5 / 9);
            fahrenheit = fahrenheit.toFixed();
            $("degrees_computed").setAttribute("disabled", "true");
            $("degrees_computed").value = fahrenheit;
        }
    }

    if ($("to_fahrenheit").checked) {

        celsius = $("degrees_entered").value;
        if (isNaN(celsius)) {
            alert("You must enter a valid number for degrees.")
            clearTextBoxes();
        } else {
            celsius = (celsius * (9 / 5)) + 32;
            celsius = parseFloat(celsius);
            celsius = celsius.toFixed();
            $("degrees_computed").setAttribute("disabled", "true");
            $("degrees_computed").value = celsius;
        }

    }

}


window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};