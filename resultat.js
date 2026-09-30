document.getElementById("nom").textContent =
    localStorage.getItem("nom");

document.getElementById("prenom").textContent =
    localStorage.getItem("prenom");

document.getElementById("email").textContent =
    localStorage.getItem("email");

document.getElementById("age").textContent =
    localStorage.getItem("age");


function retour() {
    window.location.href = "index.html";
}