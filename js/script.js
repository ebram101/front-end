// Wait until the DOM is fully loaded before running the code
document.addEventListener("DOMContentLoaded", function () {
  // Select the login form and error message elements by ID
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  // Check if the login form exists on the page
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form's default submission behavior

      // Hardcoded credentials for demonstration purposes
      const validUsername = "admin";
      const validPassword = "password123";

      // Retrieve values from username and password input fields
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Hide the error message before every login attempt
      loginMessage.style.display = "none";

      // Check if the input credentials match the valid ones
      if (username === validUsername && password === validPassword) {
        alert("Login succesvol! Je wordt nu doorgestuurd naar de hoofdpagina.");
        window.location.href = "index.html"; // Redirect to the main page on successful login
      } else {
        // Display an error message for invalid credentials
        loginMessage.style.display = "block";
        loginMessage.textContent = "Onjuiste gebruikersnaam of wachtwoord!";
      }
    });
  }

  // Check if a contact form exists on the page and add a submit event listener
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      alert("Formulier verzonden!"); // Temporary alert to confirm submission
    });
  }

  // Dynamically fetch and insert the header content
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        headerElement.innerHTML = data; // Insert the fetched header HTML
      }
    })
    .catch((error) => {
      console.error("Error loading header:", error); // Log any fetch errors
    });

  // Dynamically fetch and insert the footer content
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.innerHTML = data; // Insert the fetched footer HTML
      }
    })
    .catch((error) => {
      console.error("Error loading footer:", error); // Log any fetch errors
    });
});
