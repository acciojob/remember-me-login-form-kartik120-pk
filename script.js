//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const existingUserButton = document.getElementById("existing");

    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block";
    }

    // Form submission handler
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            existingUserButton.style.display = "block";
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            existingUserButton.style.display = "none";
        }
    });

    // Existing user login handler
    existingUserButton.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
    });
});
