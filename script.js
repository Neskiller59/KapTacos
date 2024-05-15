const tacos = document.getElementsByClassName(".tacos")
const kap = document.getElementsByClassName(".kap")
const burger = document.getElementsByClassName(".burger")
const sandwiche = document.getElementsByClassName(".sandwiche")
const plaisir = document.getElementsByClassName(".plaisir")

// Sélectionner le bouton Tacos
const tacosButton = document.querySelector(".tacos");
// Ajouter un écouteur d'événements au clic
tacosButton.addEventListener("click", () => {
    // Rediriger vers la page Tacos
    window.location.href = "/Kap_tacos/page/tacos.html";
});

// Faire de même pour les autres boutons
const kapButton = document.querySelector(".kap");
kapButton.addEventListener("click", () => {
    window.location.href = "/Kap_tacos/page/Kap.html";
});

const burgerButton = document.querySelector(".burger");
burgerButton.addEventListener("click", () => {
    window.location.href = "/Kap_tacos/page/burger.html";
});

const sandwicheButton = document.querySelector(".sandwiche");
sandwicheButton.addEventListener("click", () => {
    window.location.href = "/Kap_tacos/page/plaisir.html";
});

const plaisirButton = document.querySelector(".plaisir");
plaisirButton.addEventListener("click", () => {
    window.location.href = "/Kap_tacos/page/plaisir.html";
});






document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', function() {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});
menu.addEventListener("click", () => {
    // Vérifier si le menu est actuellement affiché ou caché
    const isMenuVisible = menu.style.display === "block";

    // Si le menu est affiché, le cacher ; sinon, l'afficher
    if (isMenuVisible) {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});