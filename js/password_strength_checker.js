$(document).ready(function() {
    $("#passField").keyup(function() {
        //Reset class and css style after each keyup
        $("i").removeClass();
        $("td").css("color", "red");
        $("#passField").css({
            "border-color": "red",
            "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
        });
        //Checking every character
        var passArray = $("#passField").val().split("");
        for (i = 0; i < passArray.length; i++) {
            var passCharacter = passArray[i];
            //Check uppercase
            if (passCharacter == passCharacter.toUpperCase() && passCharacter != passCharacter.toLowerCase()) {
                $("#upperCase").addClass("fa fa-check-square-o");
                $("#upperCaseText").css("color", "green");
            }
            //Check numbers
            if (!isNaN(passCharacter)) {
                $("#isNumber").addClass("fa fa-check-square-o");
                $("#isNumberText").css("color", "green");
            }
            //Check lowercase
            if (passCharacter == passCharacter.toLowerCase() && passCharacter != passCharacter.toUpperCase()) {
                $("#lowerCase").addClass("fa fa-check-square-o");
                $("#lowerCaseText").css("color", "green");
            }
            //Check password length
            if (passArray.length >= 8) {
                $("#enoughChar").addClass("fa fa-check-square-o");
                $("#enoughCharText").css("color", "green");
            }
            //Check special characters
            if (isNaN(passCharacter) === (passCharacter.toUpperCase() == passCharacter.toLowerCase())) {
                $("#specChar").addClass("fa fa-check-square-o");
                $("#specCharText").css("color", "green");
            }
            //Check is all conditions fulfilled
            if ($("#upperCase").hasClass("fa fa-check-square-o") && $("#isNumber").hasClass("fa fa-check-square-o") && $("#lowerCase").hasClass("fa fa-check-square-o") && $("#enoughChar").hasClass("fa fa-check-square-o") && $("#specChar").hasClass("fa fa-check-square-o")) {
                $("#checkIcon").addClass("fa fa-check fa-2x");
                $("#passField").css({
                    "border-color": "green",
                    "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 128, 0, 0.6)"
                });
            }
        }
    });
    //Checkbox for show/hide password
    $("#showPass").click(function() {
        if ($("#passField")[0].type === "password") {
            $("#passField").attr("type", "text");
        } else {
            $("#passField").attr("type", "password");
        }
    })
})