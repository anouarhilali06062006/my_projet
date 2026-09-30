const formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    localStorage.setItem(
        "nom",
        document.getElementById("nom").value
    );

    localStorage.setItem(
        "prenom",
        document.getElementById("prenom").value
    );

    localStorage.setItem(
        "email",
        document.getElementById("email").value
    );

    localStorage.setItem(
        "age",
        document.getElementById("age").value
    );

    window.location.href = "resultat.html";
});