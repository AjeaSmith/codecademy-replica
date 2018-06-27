//Check to see if signup form fields were empty, if so, show error message
$(function checkSignup() {
    $('#signup').submit(function (e) {
        e.preventDefault();
        var user = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        var checkbox = document.getElementById("checkbox");
        if (user == "" || email == "" || pass == "" || !checkbox.checked) {
            $(".error").html("All fields are required!");
            $(".error").show();
        } else {
            alert("Form Submitted");
        }
    })

})
// Check to see if login form fields were empty, if so, show error message
$(function checkLogin() {
    $('#login').submit(function (e) {
        e.preventDefault();
        var email2 = document.getElementById("email2").value;
        var pass2 = document.getElementById("password2").value;
        if (email2 == "" || pass2 == "") {
            $(".error2").html("All fields are required!");
            $(".error2").show();
        } else {
            alert("Form Submitted");
        }
    })

//Creating a focusout function for each input
    $(function checkInputs() {

        $('#errorUser').hide();
        $('#errorEmail').hide();
        $('#errorPass').hide();

        $('#username').focusout(function () {
            checkUser();
        })
        
        $('#email').focusout(function () {
            checkEmail();
        })

        $('#password').focusout(function () {
            checkPass();
        })
    })
//Creating username function
        function checkUser() {
            var pattern = /^[a-zA-Z0-9._]*$/;
            var user = document.getElementById("username").value;
            if (user == "" || !pattern.test(user) || user.length < 3 || user.length > 15) {
                $('#errorUser').html("Please enter a username that is 3 to 15 characters, with any lower case character, digit or special symbol “_-” only.");
                $('#errorUser').show();
                $("#username").css("border-bottom", "3px solid red");

            } else if (!user == "" || pattern.test(user) || user.length > 3) {
                $('#errorUser').hide();
                $("#username").css("border-bottom", "3px solid #32cd32");
            }
        }

//creating email function 
        function checkEmail() {
            var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var email = document.getElementById("email").value;
            if (email == "" || !pattern.test(email) || email.length < 4) {
                $('#errorEmail').html("Invaild email ex: example@example.com");
                $('#errorEmail').show();
                $("#email").css("border-bottom", "3px solid red");

            } else if (!email == "" || pattern.test(email) || email.length > 4) {
                $('#errorEmail').hide();
                $("#email").css("border-bottom", "3px solid #32cd32");
            }
        }
//creating password function   
        function checkPass() {
            var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            var pass = document.getElementById("password").value;
            if (pass == "" || !pattern.test(pass) || pass.length < 6) {
                $('#errorPass').html("Must be 6-20 characters, contain a digit, and a lowercase and uppercase letter");
                $('#errorPass').show();
                $("#password").css("border-bottom", "3px solid red");

            } else if (!pass == "" || pattern.test(pass) || pass.length <= 20) {
                $('#errorPass').hide();
                $("#password").css("border-bottom", "3px solid #32cd32");
            }
        }
})


//FOR LOGIN FIELDS
$(function checkInputs2() {

    $('#errorEmail2').hide();
    $('#errorPass2').hide();
    
    $('#email2').focusout(function () {
        matchEmail2();
    })

    $('#password2').focusout(function () {
        matchPass2();
    }) 
})
//Match first and second email
function matchEmail2(){
    var email = $("#email").val();
    var email2 = $("#email2").val();
    if (email == email2 && email !== "") {
        $("#errorEmail2").hide();
        $("#email2").css("border-bottom", "3px solid #32cd32");
    } else{
        $("#errorEmail2").html("incorrect email");
        $("#errorEmail2").show();
        $("#email2").css("border-bottom", "3px solid red");
    }
    
}

//Match first and second password
function matchPass2(){
    var pass = $("#password").val();
    var pass2 = $("#password2").val();
    if (pass == pass2 && pass !== "") {
        $("#errorPass2").hide();
        $("#password2").css("border-bottom", "3px solid #32cd32");
    } else{
        $("#errorPass2").html("incorrect password");
        $("#errorPass2").show();
        $("#password2").css("border-bottom", "3px solid red");
    }
    
}