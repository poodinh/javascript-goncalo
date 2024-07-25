// refreshes the page automatically when another button is clicked
const monitorValueChange = () => {
  const newButtonId = localStorage.getItem("clickedButtonId");
  if (newButtonId !== buttonId) {
    buttonId = newButtonId;
    window.location.reload();
  }
};

// Retrieve the button ID from local storage
let buttonId = localStorage.getItem("clickedButtonId");
setInterval(monitorValueChange, 1000);

//Getting the api url
let api;
buttonId === null
  ? (api = "https://fakestoreapi.com/products/5")
  : (api = `https://fakestoreapi.com/products/${buttonId}`);

//Getting the api info
const data = async () => {
  const response = await fetch(api);
  const dataBase = await response.json();
  return dataBase;
};

//getting the product info and creating the html
const info = async () => {
  //product info
  const dataBase = await data();
  const {
    category,
    description,
    id,
    image,
    title,
    rating: { rate, count },
    price,
  } = dataBase;
  //creating the html
  const product = document.createElement("div");
  product.setAttribute("class", "product");
  document.body.appendChild(product);
  product.insertAdjacentHTML(
    "beforeend",
    `<p>Category: ${category}</p>
    <p>ID: ${id}</p>
    <p>Title: ${title}</p>
    <img src="${image}" alt="">
    <p>Rating: ${rate} Count: ${count}</p>
    <p>Price: ${price}</p>
    <p>Description: ${description}</p>`
  );

  productsSameCategory(category,id)
};

info();

//getting the api of the category of the product
const categoryApi = async (category) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const dataBase = await response.json();
  return dataBase;
};

//insert the first three of the same categorie to the bottom of the page (in case they aren't the same as the one being displayed)
const productsSameCategory = async (category, productId) => {
  const dataBase = await categoryApi(category);
  const [firstProd, secondProd, thirdProd, forthProd] = dataBase;
  const categories = document.createElement("div");
  categories.setAttribute("class", "category");
  document.body.appendChild(categories);

  //conditions if the product displayed is the same as the first three products
  if (productId === firstProd.id) {
    categories.insertAdjacentHTML(
      'beforeEnd',
      `<div class="category--product">
        <p>Title: ${secondProd.title}</p>
        <img src="${secondProd.image}" alt="">
      </div>
      <div class="category--product">
        <p>Title: ${thirdProd.title}</p>
        <img src="${thirdProd.image}" alt="">
      </div>
      <div class="category--product">
        <p>Title: ${forthProd.title}</p>
        <img src="${forthProd.image}" alt="">
      </div>`
    );
  } else if (productId === secondProd.id) {
    categories.insertAdjacentHTML(
      'beforeEnd',
      `<div class="category--product">
        <p>Title: ${firstProd.title}</p>
        <img src="${firstProd.image}" alt="">
      </div>
      <div class="category--product">
        <p>Title: ${thirdProd.title}</p>
        <img src="${thirdProd.image}" alt="">
      </div>
      <div class="category--product">
        <p>Title: ${forthProd.title}</p>
        <img src="${forthProd.image}" alt="">
      </div>`
    );
  } else if (productId === thirdProd.id) {
    categories.insertAdjacentHTML(
      'beforeEnd',
      `<div class="category--product">
        <p>Title: ${firstProd.title}</p>
        <img src="${firstProd.image}" alt="">
      </div>
      <div class="category--product">
        <p>Title: ${secondProd.title}</p>
        <img src="${secondProd.image}" alt="">
      </div>
      <div class="category--product">
        <p>Title: ${forthProd.title}</p>
        <img src="${forthProd.image}" alt="">
      </div>`
    );
  } else {categories.insertAdjacentHTML(
    'beforeEnd',
    `<div class="category--product">
        <p>Title: ${firstProd.title}</p>
        <img src="${firstProd.image}" alt="">
      </div>
      <div class="category--product">
        <p>Title: ${secondProd.title}</p>
        <img src="${secondProd.image}" alt="">
      </div>
      <div class="category--product">
        <p>Title: ${thirdProd.title}</p>
        <img src="${thirdProd.image}" alt="">
      </div>
      `
  );}
};
