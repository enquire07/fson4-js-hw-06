const categoriesList = document.getElementById("categories");
//
const categories = categoriesList.querySelectorAll("li.item");

//
console.log("Number of categories:", categories.length);
//
categories.forEach(function (category) {
  //
  const categoryName = category.querySelector("h2").textContent;
  //
  const categoryElements = category.querySelectorAll("ul li");
  const elementCount = categoryElements.length;

  //
  console.log("Category:", categoryName);
  console.log("Elements:", elementCount);
});
