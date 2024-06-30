const buttonForChangeColor = document.querySelector(".change-color");
const descriptionColor = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonForChangeColor.addEventListener("click", function (event) {
  event.preventDefault();
  const colorForBody = getRandomHexColor();
  body.style.backgroundColor = colorForBody;

  descriptionColor.textContent = colorForBody;
});
