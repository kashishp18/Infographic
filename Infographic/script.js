const popup = document.getElementById("popup");

let activeElement = null;

document.querySelectorAll(".tooltip-wrap").forEach((element) => {

  element.addEventListener("click", (e) => {

    e.stopPropagation();

    const tooltip = element.querySelector(".tooltip");

    if (!tooltip) return;

    if (activeElement === element) {
      hidePopup();
      return;
    }

    activeElement = element;

    popup.innerHTML = tooltip.innerHTML;

    popup.style.display = "block";

    const rect = element.getBoundingClientRect();

    const popupWidth = popup.offsetWidth || 280;

    let left =
      rect.left +
      window.scrollX +
      rect.width / 2 -
      popupWidth / 2;

    let top =
      rect.bottom +
      window.scrollY +
      15;

    if (left < 10) {
      left = 10;
    }

    popup.style.left = left + "px";
    popup.style.top = top + "px";

  });

});

function hidePopup() {

  popup.style.display = "none";

  activeElement = null;
}

document.addEventListener("click", () => {
  hidePopup();
});

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    hidePopup();
  }

});