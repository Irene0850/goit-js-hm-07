const inputQuantity = document.querySelector("#controls input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const containerForEl = document.getElementById("#boxes");

inputQuantity.classList.add("input-quantity-js");
buttonCreate.classList.add("button-create");
buttonDestroy.classList.add("button-destroy-js");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  containerForEl.innerHTML = "";

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    // containerForEl.insertAdjacentHtml("beforeend", box.outerHTML);
    createBoxes.push(box);
  }
  containerForEl.append(...boxes);
}

buttonCreate.addEventListener("click", () => {
  const amount = Number(inputQuantity.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputQuantity.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
  input.value = "";
});

buttonDestroy.addEventListener("click", () => {
  containerForEl.innerHTML = "";
});
