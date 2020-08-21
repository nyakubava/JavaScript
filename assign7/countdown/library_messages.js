var message = {
    required: function() {
        return "Please enter both a name and a date.";
    },
    invalidDate: function() {
        return "Please enter the date in MM/DD/YYYY format.";
    },


    // days  === 0
    today: function(event) {
        return "Hooray! Today is ".concat(event.name.toLowerCase(),
            "!\n(", event.date.toDateString(), ")");
    },

    // days < 0
    past: function(event) {
        var name = event.name.substring(0, 1).toUpperCase() + event.name.substring(1);
        return name.concat(" happened ", Math.abs(event.days),
            " day(s) ago. \n (", event.date.toDateString(), ")");
    },

    // days > 0
    future: function(event) {
        return event.days.toString().concat(" day(s) until ",
            event.name.toLowerCase(), "!\n(", event.date.toDateString(), ")");
    },


};