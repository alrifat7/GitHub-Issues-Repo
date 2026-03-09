document.getElementById("signin-btn").addEventListener("click", function() {
    const usernameInput = document.getElementById("input-username");
    const userName = usernameInput.value;
    console.log(userName);

    const passwordInput = document.getElementById("input-password");
    const password = passwordInput.value;
    console.log(password);

    if(userName === "admin" && password === "admin123") {
        alert("Sign In successful!");

        window.location.assign("/home.html");
    } else {
        alert("Sign In Failed. Please try again.");
        return;
    }
});