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
  //id from the url
  const id = api.split("/").pop();
  //product info
  const dataBase = await data();
  const {
    category,
    description,
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

  productsSameCategory(category, id);
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

  //removing the displayed product from the categories array
  const categoriesWithoutDiplayedProd = dataBase.filter(
    (prod) => prod.id != productId
  );

  const [firstProd, secondProd, thirdProd] = categoriesWithoutDiplayedProd;
  //creating the bottom div for them
  const categories = document.createElement("div");
  categories.setAttribute("class", "category");
  document.body.appendChild(categories);

  //conditions if the product displayed is the same as the first three products
  categories.insertAdjacentHTML(
    "beforeEnd",
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
  );

//adding the copyright year to the end of the page
  categories.insertAdjacentHTML(
    "afterEnd",
    `<p>Copyright ${formatedDate()}</p>
      `
  );
};

//getting the year

const formatedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};
