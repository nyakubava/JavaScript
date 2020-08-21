"use strict";

var Coins = function(cents) {
    this.cents = cents;
}

Coins.prototype.isValid = function() {
    return (isNaN(this.cents) || this.cents < 0 || this.cents > 99) ? false : true;

}

Coins.prototype.getNumber = function(divisor) {
    var numCoins = Math.floor(this.cents / divisor);
    this.cents %= divisor;
    return numCoins;
}