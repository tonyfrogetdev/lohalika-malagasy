document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("hiddenUp")) {
          entry.target.classList.add("show");
        } else if (entry.target.classList.contains("hiddenLeft")) {
          entry.target.classList.add("showLeft");
        } else if (entry.target.classList.contains("hiddenRight")) {
          entry.target.classList.add("showRight");
        }
      }
    });
  });

  const hiddenUpElements = document.querySelectorAll(".hiddenUp");
  hiddenUpElements.forEach((elements) => observer.observe(elements));

  const hiddenLeftElements = document.querySelectorAll(".hiddenLeft");
  hiddenLeftElements.forEach((elements) => observer.observe(elements));

  const hiddenRightElements = document.querySelectorAll(".hiddenRight");
  hiddenRightElements.forEach((elements) => observer.observe(elements));

  console.log(hiddenRightElements);
});
