$("#contactForm").submit(function(e) {
    e.preventDefault();
    $(".error, #formSuccess").text("");
    let isValid = true;
  
    const requiredFields = ['name', 'email', 'interest', 'referral', 'message'];
    
    requiredFields.forEach(field => {
        const $el = $(`#${field}`);
        if (!$el.val().trim()) {
            $(`#${field}Error`).text(`Please enter your ${field}.`);
            isValid = false;
        }
    });
  
    const email = $("#email").val().trim();
    if (email && !/.+@.+\..+/.test(email)) {
        $("#emailError").text("Please enter a valid email address.");
        isValid = false;
    }

    if (isValid) {
        $("#formSuccess").text("Thank you! Your message has been submitted.");
        this.reset();
    }
});
