// 03/27/2020

$(document).ready(function() {
    $("#arrival_date").focus();

    $("#reservation_form").submit(
        function(event) {
            var isValid = true;


            // validate the requested arrival date
            var arrivalDate = $("#arrival_date").val().trim();
            if (arrivalDate == "") {
                $("#arrival_date").next().text("This field is required.");
                isValid = false;
            } else {
                $("#arrival_date").next().text("");
            }
            $("#arrival_date").val(arrivalDate);



            // validate the night entry
            var nights = $("#nights").val().trim();
            if (nights == "") {
                $("#nights").next().text("This field is required.");
                isValid = false;
            } else if (isNaN($("#nights").val())) {
                $("#nights").next().text("This field must be numeric.");
                isValid = false;
            } else {
                $("#nights").next().text("");
            }
            $("#nights").val(nights);


            // validate the email entry with a regular expression
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email").val().trim();
            if (email == "") {
                $("#email").next().text("This field is required.");
                isValid = false;
            } else if (!emailPattern.test(email)) {
                $("#email").next().text("Must be a valid email address.");
                isValid = false;
            } else {
                $("#email").next().text("");
            }
            $("#email").val(email);



            // validate the name entry
            var name = $("#name").val().trim();
            if (name == "") {
                $("#name").next().text("This field is required.");
                isValid = false;
            } else {
                $("#name").next().text("");
            }
            $("#name").val(name);



            // validate the phone entry
            var phone = $("#phone").val().trim();
            if (phone == "") {
                $("#phone").next().text("This field is required.");
                isValid = false;

            } else {
                $("#phone").next().text("");
            }
            $("#phone").val(phone);


            // prevent the default action of submitting the form if any entries are invalid 
            if (isValid == false) {
                event.preventDefault();

            }
        } // end function
    ); // end submit
}); // end ready