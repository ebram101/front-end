document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Hardcoded credentials for demonstration purposes
      const validUsername = "admin";
      const validPassword = "password123";

      // Get input values
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Hide the error message on every attempt
      loginMessage.style.display = "none";

      // Check if credentials are valid
      if (username === validUsername && password === validPassword) {
        alert("Login succesvol! Je wordt nu doorgestuurd naar de hoofdpagina.");
        window.location.href = "index.html"; // Redirect to main page
      } else {
        loginMessage.style.display = "block";
        loginMessage.textContent = "Onjuiste gebruikersnaam of wachtwoord!";
      }
    });
  }

  if (document.getElementById("contactForm")) {
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
