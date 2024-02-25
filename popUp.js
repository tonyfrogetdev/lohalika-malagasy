document.addEventListener("DOMContentLoaded", function () {
  // selectionne mes boutons et la popup
  const openPopupButtons = document.querySelectorAll(".btn.btn-style");
  const popup = document.querySelector("#popup");
  const closePopupButton = document.querySelector(".close-popup");

  // fonction pour ouvrir la pop up
  function openPopup() {
    popup.style.display = "flex";
  }

  function closePopup() {
    popup.style.display = "none";
  }

  // pour chaque boutons, ajout event openPopup

  openPopupButtons.forEach((button) => {
    button.addEventListener("click", openPopup);
  });

  closePopupButton.addEventListener("click", closePopup);

  // fermer la pop up en cliquant sur en dehors de la pop up

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });
});
