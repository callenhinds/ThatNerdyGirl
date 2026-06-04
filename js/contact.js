$("#contactForm").submit(function(e) {
    e.preventDefault();

    $(".error").text("");
    $("#formSuccess").text("");

    let isValid = true;

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let interest = $("#interest").val();
    let referral = $("#referral").val().trim();
    let message = $("#message").val().trim();

    if (name === "") {
        $("#nameError").text("Please enter your name.");
        isValid = false;
    }

    if (email === "") {
        $("#emailError").text("Please enter your email address.");
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        $("#emailError").text("Please enter a valid email address.");
        isValid = false;
    }

    if (interest === "") {
        $("#interestError").text("Please select your primary interest.");
        isValid = false;
    }

    if (referral === "") {
        $("#referralError").text("Please tell me where you heard about That Nerdy Girl.");
        isValid = false;
    }

    if (message === "") {
        $("#messageError").text("Please enter a message.");
        isValid = false;
    }

    if (isValid) {
        $("#formSuccess").text("Thank you! Your message has been submitted.");
        $("#contactForm")[0].reset();
    }
});
