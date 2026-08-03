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
});

function mettreAJourStatut() {
    const statut = document.getElementById("statut-ouverture");

    const maintenant = new Date();

    // Jour : 0 = dimanche, 1 = lundi, ..., 6 = samedi
    const jour = maintenant.getDay();

    const heure = maintenant.getHours();
    const minutes = maintenant.getMinutes();

    const heureActuelle = heure + minutes / 60;

    let ouverture = 11;
    let fermeture = 0;

    // Vendredi et samedi : 11h00 → 01h00
    if (jour === 5 || jour === 6) {
        fermeture = 25; // 01h00 du lendemain
    }

    // Pour vendredi/samedi, 00h00 → 01h00 reste ouvert
    const ouvertApresMinuit =
        (jour === 6 || jour === 0) && heureActuelle < 1;

    const ouvert =
        ouvertApresMinuit ||
        (heureActuelle >= ouverture && (
            (jour >= 0 && jour <= 4 && heureActuelle < 24) ||
            ((jour === 5 || jour === 6) && heureActuelle < 25)
        ));

    if (ouvert) {
        statut.textContent = "🟢 Ouvert actuellement";
    } else {
        statut.textContent = "🔴 Fermé actuellement";
    }
}

// Vérifier immédiatement
mettreAJourStatut();

// Mettre à jour automatiquement chaque minute
setInterval(mettreAJourStatut, 60000);
