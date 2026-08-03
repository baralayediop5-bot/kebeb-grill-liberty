document.addEventListener("DOMContentLoaded", function () {

    const formulaire = document.querySelector("#reservation-form");

    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Message envoyé !");

        formulaire.reset();
    });

});
