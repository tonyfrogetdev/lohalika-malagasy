document.addEventListener("DOMContentLoaded", function () {
  // selectionne mes boutons
  const button1 = document.querySelector("#bouton1");
  const button2 = document.querySelector("#bouton2");
  const button3 = document.querySelector("#bouton3");
  const button4 = document.querySelector("#bouton4");
  // selectionne la pop up
  const popup = document.querySelector("#popup");
  const closePopupButton = document.querySelector(".close-popup");
  const popupContent = document.querySelector(".popup-content");

  const exercices = [
    "Exercice 1 : Le premier est le plus important au début car il faut retrouver au plus vite l'extension de la jambe pour pouvoir remarcher correctement et sans douleur",
    "Exercice 2 : Le deuxième permettra de fléchir à nouveau correctement le genou, ce qui reste indispensable pour réaliser de nombreux mouvements dans son quotidien et surtout pour la suite de la rééducation avec la musculation",
    "Exercice 1 : Je suis exo 1",
    "Exercice 2 : Je suis exo 2",
  ];

  // fonction pour ouvrir la pop up
  function openPopup(text) {
    popupContent.innerHTML = text;
    popup.style.display = "flex";
  }

  function closePopup() {
    popup.style.display = "none";
  }

  // pour chaque boutons, ajout event openPopup

  button1.addEventListener("click", function () {
    openPopup(exercices[0] + exercices[1]);
  });

  button2.addEventListener("click", function () {
    openPopup(exercices[2] + exercices[3]);
  });

  closePopupButton.addEventListener("click", closePopup);

  // fermer la pop up en cliquant sur en dehors de la pop up

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });
});
