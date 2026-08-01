function bonjour() {
alert("Bonjour Bara ! Merci de visiter mon site.");
} 

const formulaire =
document.querySelector("form");

formulaire.addEventListener("submit", function(event) {

event.preventDefault();

    alert("Message envoyes !");

    formulaire.reset();
});