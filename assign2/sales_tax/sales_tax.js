"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

function calculateTax(subtotal, tax_rate) {
    var salesTax = subtotal * (tax_rate / 100);
    salesTax = salesTax.toFixed(2);
    return salesTax;

};

var calculateTotal = function(subtotal, salesTax) {
    return (Number(subtotal) + Number(salesTax)).toFixed(2);
};

var processEntries = function() {
    var subtotal = parseFloat($("subtotal").value);
    var tax_rate = parseFloat($("tax_rate").value);


    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        $("subtotal").focus();

    } else if (isNaN(tax_rate) || tax_rate <= 0 || tax_rate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        $("tax_rate").focus();
    } else {
        const salesTax = calculateTax(subtotal, tax_rate);
        const total = calculateTotal(subtotal, salesTax);
        $("sales_tax").value = salesTax;
        $("total").value = total;
    }
};
// functions for cleaning fields //




window.onload = function() {
    $("calculate").onclick = processEntries;
    $("subtotal").focus();
    $("clear").onclick = cleanEntries;
    $("subtotal").onclick = cleanSubtotal;
    $("tax_rate").onclick = cleanRate;
    $("subtotal").focus();
};

function cleanEntries() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    $("subtotal").focus()
};

var cleanSubtotal = function() {
    $("subtotal").value = "";

};

var cleanRate = function() {
    $("tax_rate").value = "";
};