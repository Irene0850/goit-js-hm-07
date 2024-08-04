const refs = {
  inputQuantity: document.querySelector("#controls input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  containerForEl: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", onCreateClick);
refs.buttonDestroy.addEventListener("click", onDestroyClick);
function onCreateClick() {
  const amount = refs.inputQuantity.value;
  const value = Number(amount);

  if (amount < 1 || amount > 100) {
    return alert(
      "Ooops, something go wrong!!! The value must be less than 100"
    );
  }
  onDestroyClick();
  createBoxes(amount);
}
function onDestroyClick() {
  refs.containerForEl.innerHTML = "";
  refs.inputQuantity.value = "";
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let elem = document.createElement("div");
    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + 10 * i + "px";
    elem.style.backgroundColor = getRandomHexColor();
    refs.boxesEl.append(elem);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
