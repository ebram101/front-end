document.addEventListener("DOMContentLoaded", function () {
  // Check if the current page is the login page
  if (document.getElementById("loginForm")) {
    // This is the login page
    document
      .getElementById("loginForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Hardcoded credentials for demonstration purposes
        const validUsername = "admin";
        const validPassword = "password123";

        // Get input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if credentials are valid
        if (username === validUsername && password === validPassword) {
          alert(
            "Login succesvol! Je wordt nu doorgestuurd naar de hoofdpagina."
          );
          window.location.href = "index.html"; // Redirect to the main page after successful login
        } else {
          document.getElementById("loginMessage").style.display = "block";
          document.getElementById("loginMessage").textContent =
            "Onjuiste gebruikersnaam of wachtwoord!";
        }
      });
  }

  // Check if the current page is the main page and if the contact form exists
  if (document.getElementById("contactForm")) {
    // This is the main page
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for now
        alert("Formulier verzonden!");
      });
  }

  // Fetch and insert the header HTML
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });
});
