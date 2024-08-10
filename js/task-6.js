const refs = {
  inputQuantity: document.querySelector("#controls input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  containerForEl: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", onCreateClick);
refs.buttonDestroy.addEventListener("click", onDestroyClick);

function onCreateClick() {
  const amount = Number(refs.inputQuantity.value);
  if (amount >= 1 || amount <= 100) {
    createBoxes(amount);
    refs.inputQuantity.value = "";
  } else {
    return alert(
      "Ooops, something go wrong!!! The value must be less than 100"
    );
  }
}

function createBoxes(amount) {
  onDestroyClick();
  const block = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    let elem = document.createElement("div");
    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + 10 * i + "px";
    elem.style.backgroundColor = getRandomHexColor();
    block.appendChild(elem);
  }
  refs.containerForEl.appendChild(block);
}

function onDestroyClick() {
  while (refs.containerForEl.firstChild) {
    refs.containerForEl.removeChild(refs.containerForEl.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
