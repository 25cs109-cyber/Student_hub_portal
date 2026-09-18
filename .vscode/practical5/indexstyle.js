var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var course = document.getElementById("course").value;
    var year = document.getElementById("year").value;
    var terms = document.getElementById("terms").checked;

    var gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    var valid = true;

    // Regular expressions
    var namePattern = /^[A-Za-z ]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobilePattern = /^[0-9]{10}$/;


    // Name
    if (name == "") {
        document.getElementById("nameError").innerHTML =
            "Name is required";
        valid = false;
    }
    else if (!namePattern.test(name)) {
        document.getElementById("nameError").innerHTML =
            "Enter a valid name";
        valid = false;
    }
    else {
        document.getElementById("nameError").innerHTML = "";
    }


    // Email
    if (email == "") {
        document.getElementById("emailError").innerHTML =
            "Email is required";
        valid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Enter a valid email";
        valid = false;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
    }


    // Mobile
    if (mobile == "") {
        document.getElementById("mobileError").innerHTML =
            "Mobile number is required";
        valid = false;
    }
    else if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
            "Enter 10 digit number";
        valid = false;
    }
    else {
        document.getElementById("mobileError").innerHTML = "";
    }


    // Password
    if (password == "") {
        document.getElementById("passwordError").innerHTML =
            "Password is required";
        valid = false;
    }
    else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML =
            "Password must be at least 6 characters";
        valid = false;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";
    }


    // Confirm password
    if (confirmPassword == "") {
        document.getElementById("confirmError").innerHTML =
            "Please confirm password";
        valid = false;
    }
    else if (password != confirmPassword) {
        document.getElementById("confirmError").innerHTML =
            "Passwords do not match";
        valid = false;
    }
    else {
        document.getElementById("confirmError").innerHTML = "";
    }


    // Course
    if (course == "") {
        document.getElementById("courseError").innerHTML =
            "Select your course";
        valid = false;
    }
    else {
        document.getElementById("courseError").innerHTML = "";
    }


    // Year
    if (year == "") {
        document.getElementById("yearError").innerHTML =
            "Select your year";
        valid = false;
    }
    else {
        document.getElementById("yearError").innerHTML = "";
    }


    // Gender
    if (gender == null) {
        document.getElementById("genderError").innerHTML =
            "Select gender";
        valid = false;
    }
    else {
        document.getElementById("genderError").innerHTML = "";
    }


    // Terms
    if (terms == false) {
        document.getElementById("termsError").innerHTML =
            "Accept terms and conditions";
        valid = false;
    }
    else {
        document.getElementById("termsError").innerHTML = "";
    }


    // Final result
    if (valid == true) {
        document.getElementById("message").innerHTML =
            "Registration Successful";

        form.reset();
        document.getElementById("strength").innerHTML = "None";
    }

});