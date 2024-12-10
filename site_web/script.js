// Initialisation d'EmailJS avec la public key
(function () {
  emailjs.init("YOUR_KEY"); // Remplace par ta public key EmailJS
})();

  // Écouteur d'événements pour soumettre le formulaire
document
.getElementById("contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi classique du formulaire

  // Ici, tu peux effectuer une redirection sans utiliser EmailJS
  window.location.href = "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/quishing-hameconnage-qr-code";
});
