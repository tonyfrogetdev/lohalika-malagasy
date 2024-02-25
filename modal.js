document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector("#videoModal");
  const closeModalButton = document.querySelector(".close-modal");
  const iframe = document.querySelector("#youtubeVideo");

  document.querySelectorAll(".videos-banner").forEach((item) => {
    item.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video-id");
      iframe.src = "https://www.youtube.com/embed/" + videoId;
      modal.style.display = "block";
    });
  });

  closeModalButton.onclick = () => {
    modal.style.display = "none";
    iframe.src = "";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  };
});
