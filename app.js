document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-section");
    const firstName = form.querySelector("input[placeholder='First Name']");
    const lastName = form.querySelector("input[placeholder='Last Name']");
    const email = form.querySelector("input[placeholder='Email Address']");
    const password = form.querySelector("input[placeholder='Password']");
    const submitButton = form.querySelector("button");
    function showError(input, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = message;
        input.classList.add("error");
        input.parentElement.insertBefore(error, input.nextSibling);
    }
    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach(error => error.remove());
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => input.classList.remove("error"));
    }
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
    function validateForm() {
        clearErrors();
        let valid = true;
        if (firstName.value.trim() === "") {
            showError(firstName, "First Name cannot be empty");
            valid = false;
        }
        if (lastName.value.trim() === "") {
            showError(lastName, "Last Name cannot be empty");
            valid = false;
        }
        if (email.value.trim() === "") {
            showError(email, "Email Address cannot be empty");
            valid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, "Looks like this is not an email");
            valid = false;
        }
        if (password.value.trim() === "") {
            showError(password, "Password cannot be empty");
            valid = false;
        } else if (password.value.trim().length < 6) {
            showError(password, "Password must be at least 6 characters");
            valid = false;
        }
        return valid;
    }
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});