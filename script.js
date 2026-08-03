document.addEventListener("DOMContentLoaded", function () {

    const formulaire = document.getElementById("reservation-form");
    const boutonWhatsApp = document.getElementById("whatsappBtn");

    // Message lors de l'envoi classique du formulaire
    if (formulaire) {
        formulaire.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Message envoyé !");
            formulaire.reset();
        });
    }

    // Bouton WhatsApp
if (boutonWhatsApp) {
    boutonWhatsApp.addEventListener("click", function () {

        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const telephone = document.getElementById("telephone").value;
        const date = document.getElementById("date").value;
        const heure = document.getElementById("heure").value;
        const personnes = document.getElementById("personnes").value;

        const champMessage = document.getElementById("message");
        const message = champMessage ? champMessage.value : "Aucun";

        const texte =
`🟢 NOUVELLE RÉSERVATION

Nom : ${nom}
E-mail : ${email}
Téléphone : ${telephone}
Date : ${date}
Heure : ${heure}
Nombre de personnes : ${personnes}
Message : ${message}`;

        const numeroWhatsApp = "352691264937";
        const url = "https://wa.me/" + numeroWhatsApp +
                    "?text=" + encodeURIComponent(texte);

        window.open(url, "_blank");
    });
}
