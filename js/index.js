const container = document.querySelector(".categories_cards");
const endpoint = `https:kea-alt-del.dk/t7/api/categories`;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(showData);
}

function showData(data) {
  let markup = "";
  data.forEach(
    (element) =>
      (markup += `<a class="category_list_container" href="productlist.html?category=${element.category}">${element.category}</a>`),
  );
  container.innerHTML = markup;
}

getData();
