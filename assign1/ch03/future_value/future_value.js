var futureValue;
var again = "y";
do {
    // get user entries
    do {
        var investment = prompt("Enter investment amount as xxxxx.xx", 10000);
        investment = parseFloat(investment);
        if (isNaN(investment)) {
            alert("Investment must be a number");
        }

    }
    while (isNaN(investment));
    do {
        var rate = prompt("Enter interest rate as xx.x", 7.5);
        rate = parseFloat(rate);
        if (isNaN(rate)) {
            alert("Rate must be a number");
        }
    }
    while (isNaN(rate));

    var years = prompt("Enter number of years", 10);
    years = parseInt(years);

    // calculate future value
    futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    futureValue = parseInt(futureValue);

    document.write("Investment amount = " + investment);
    document.write(" Interest rate = " + rate);
    document.write(" Years = " + years + "<br>");

    futureValue = investment;
    for (var i = 1; i <= years; i++) {
        yearlyInterest = futureValue * rate / 100;
        futureValue = futureValue + yearlyInterest;
        document.write("Year=" + i + " Interest=" + yearlyInterest +
            " Value=" + parseInt(futureValue) + "<br>");
    }
    document.write("<br>");
    again = prompt("Repeat entries (y or n)?", "y");
}
while (again == "y");