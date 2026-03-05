const kategori = new URLSearchParams(window.location.search).get("category");

const container = document.querySelector("main");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${kategori}`;

document.querySelector("h2").textContent = kategori;
const listContainer = document.querySelector("#productlistContainer");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  let markup = "";

  json.forEach((element) => {
    console.log(element);
    markup += ` <a href="product.html?fisk=${element.id}">
        <article class="smallProduct ${element.soldout ? "onSale soldOut" : ""}">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp"
            alt="product image"
          />
          <h3>${element.productdisplayname}</h3>
          <p class="product_brand">Tshirts | Nike</p>
          <p class="price">DKK <span>1299</span>,-</p>
          <div class="discounted">
            ${element.discount ? `<p>Now DKK <span>${element.price}</span>,-</p>` : ""}
           ${element.discount ? `<p><span>25</span>%</p>` : ""} 
          </div>
        </article>
      </a>`;
  });
  container.innerHTML = markup;
}

getData();

document
  .querySelectorAll("button")
  .forEach((knap) => knap.addEventListener("click", filter));

let allData;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      showData(allData);
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  if (valgt === "All") {
    console.log(allData);
    showData(allData);
  } else {
    const udsnit = allData.filter((element) => element.gender == valgt);
    console.log(udsnit);
    showData(udsnit);
  }
}
