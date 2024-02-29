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

  // selectionne mes deux <p>
  const exo1Element = document.querySelector(".exo1");
  const exo2Element = document.querySelector(".exo2");

  const exercices = [
    "Exercice 1 : Le premier est le plus important au début car il faut retrouver au plus vite l'extension de la jambe pour pouvoir remarcher correctement et sans douleur.<br>",
    "Exercice 2 : Le deuxième permettra de fléchir à nouveau correctement le genou, ce qui reste indispensable pour réaliser de nombreux mouvements dans son quotidien et surtout pour la suite de la rééducation avec la musculation.<br>",

    "Exercice 1 : Le premier te permettra de travailler ton extension de genou, tu peux utiliser un tempo différent, comme moi sur la vidéo ou sinon avec un plus grand temps sous tension (tenir 5sec avec le quadriceps contracté au maximum puis relâcher<br>",
    "Exercice 2 : Le deuxième te permettra d'éviter les problèmes de déséquilibres musculaires(avec des ischios faibles) qui peuvent entraîner des douleurs aux genoux, ainsi que de travailler ta flexion du genou avec une charge légère<br>",

    "Exercice 1 : Le sissy squat, renforce tes quadriceps et tes fléchisseurs de hanches tout en gagnant en souplesse dans des positions à fortes tensions d'étirements, tu réduiras ainsi le risque de blessures aux genoux<br>",
    "Exercice 2 : Leg curl à la swiss ball pour renforcer les ischio et aussi les fessiers<br>",

    "Exercice 1 : Les fentes bulgares qui renforceront principalement tes cuisses et tes fessiers mais agiront aussi sur l'amélioration de ta stabilité et ton équilibre, cela participera grandement à prévenir les blessures et améliorer tes performances physiques<br>",
    "Exercice 2 : Le soulevé de terre jambe tendue à une jambe fera intervenir beaucoup plus de muscles stabilisateurs pour maintenir l'équilibre, il renforcera principalement tes ischios-jambier et tes muscles spinaux(ceux du bas du dos)<br>",
  ];

  // fonction pour ouvrir la pop up
  function openPopup(exo1Text, exo2Text) {
    exo1Element.innerHTML = exo1Text;
    exo2Element.innerHTML = exo2Text;
    popup.style.display = "flex";
  }

  function closePopup() {
    popup.style.display = "none";
  }

  // pour chaque boutons, ajout event openPopup

  button1.addEventListener("click", function () {
    openPopup(exercices[0], exercices[1]);
  });

  button2.addEventListener("click", function () {
    openPopup(exercices[2], exercices[3]);
  });

  button3.addEventListener("click", function () {
    openPopup(exercices[4], exercices[5]);
  });

  button4.addEventListener("click", function () {
    openPopup(exercices[6], exercices[7]);
  });

  closePopupButton.addEventListener("click", closePopup);

  // fermer la pop up en cliquant sur en dehors de la pop up

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });
});
