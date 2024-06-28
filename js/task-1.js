const classForli = document.querySelectorAll(".item li");

classForli.forEach((li) => {
  li.classList.add("list");
});

const classForTitle = document.querySelectorAll(".item h2");
classForTitle.forEach((h2) => {
  h2.classList.add("list-title");
});

const classForUl = document.getElementById("categories");
classForUl.classList.add("list-categories");

const listOfCategories = document.querySelectorAll("#categories .item");
console.log("Number of categories: ", listOfCategories.length);

const nameOfList = document.querySelectorAll(".item h2");
nameOfList.forEach((li) => {
  console.log("Category: ", li.textContent);

  const quantityOfLists = li.nextElementSibling.querySelectorAll("li");
  console.log("Elements: ", quantityOfLists.length);
});
