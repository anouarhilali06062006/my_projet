const profileKeys = ["nom", "prenom", "email", "age"];
const fields = {
    nom: document.getElementById("data-nom"),
    prenom: document.getElementById("data-prenom"),
    email: document.getElementById("data-email"),
    age: document.getElementById("data-age")
};
const exportButton = document.getElementById("export-button");
const deleteButton = document.getElementById("delete-button");
const feedback = document.getElementById("feedback");

function getProfile() {
    return Object.fromEntries(
        profileKeys.map((key) => [key, localStorage.getItem(key) || ""])
    );
}

function renderProfile(message = "") {
    const profile = getProfile();
    const hasData = profileKeys.some((key) => profile[key]);

    for (const key of profileKeys) {
        fields[key].textContent = profile[key] || "Non renseigné";
    }

    exportButton.disabled = !hasData;
    deleteButton.disabled = !hasData;
    feedback.textContent = message || (hasData ? "" : "Aucune donnée de profil n’est enregistrée sur cet appareil.");
}

exportButton.addEventListener("click", () => {
    const profile = getProfile();
    const file = new Blob([JSON.stringify(profile, null, 2)], {
        type: "application/json"
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = "mes-donnees-myspace.json";
    link.click();
    URL.revokeObjectURL(url);
    renderProfile("Votre fichier de données a été téléchargé.");
});

deleteButton.addEventListener("click", () => {
    if (!window.confirm("Supprimer les informations de profil enregistrées sur cet appareil ?")) {
        return;
    }

    for (const key of profileKeys) {
        localStorage.removeItem(key);
    }

    renderProfile("Vos données de profil ont été supprimées de cet appareil.");
});

renderProfile();