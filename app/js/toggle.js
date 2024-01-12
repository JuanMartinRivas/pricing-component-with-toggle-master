const toggle = document.querySelector(".toggle-container__input");
const prices = document.querySelectorAll(".card__pricing-span");

toggle.addEventListener("click", handleToggle);
window.addEventListener("load", handleToggle);

function handleToggle() {
  if (toggle.checked) {
    prices[0].textContent = "19.99";
    prices[1].textContent = "24.99";
    prices[2].textContent = "39.99";
  } else {
    prices[0].textContent = "199.99";
    prices[1].textContent = "249.99";
    prices[2].textContent = "399.99";
  }
}
