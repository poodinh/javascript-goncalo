//getting the date
const formatedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();
  //in case the month and day only have one digit
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

const cart = {
  userId: 1,
  data: formatedDate(),
  products: [],
};

// collection the data
const data = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const dataBase = await response.json();
  return dataBase;
};

//creating the grid of images and titltes
const productsGrid = async () => {
  const dataBase = await data();
  const dataSize = dataBase.length;
  const images = dataBase.map((data) => data.image);
  const titles = dataBase.map((data) => data.title);

  const grid = document.createElement("div");
  grid.setAttribute("class", "products--grid");
  document.body.appendChild(grid);

  for (i = 0; i <= dataSize - 1; i++) {
    grid.insertAdjacentHTML(
      "beforeend",
      `<div class='product--block'>
                <p>${titles[i]}</p>
                <img src="${images[i]}" alt="loading"></img>
            </div>`
    );
  }

  return grid;
};

//creation of the buttons and its fucntions
const cartButton = async () => {
  const dataBase = await data();
  const gridCreated = await productsGrid();

  //creation of the buttons
  const prodBlock = gridCreated.querySelectorAll(".product--block");
  prodBlock.forEach((div) => {
    div.insertAdjacentHTML("beforeend", `<button> Add to Cart </button>`);
  });

  addToCart(gridCreated, dataBase);
};

//updating the cart
const addToCart = (grid, dataBase) => {
  const buttons = grid.querySelectorAll("button");
  const allIds = dataBase.map((data) => data.id);
  for (i = 0; i <= dataBase.length - 1; i++) {
    const prodId = allIds[i];
    
    buttons[i].setAttribute("id", `${allIds[i]}`); //the id of the button is the same as the product

    buttons[i].addEventListener("click", (event) => {
      const isProdInCart = cart.products.findIndex(
        (prodInCart) => prodInCart.productId === prodId
      );
      if (isProdInCart !== -1) {
        //updating the quantity in the cart
        cart.products[isProdInCart].quantity += 1;
      } else {
        //creating a new product in the cart
        const product = {
          productId: prodId,
          quantity: 1,
        };
        cart.products.push(product);
      }
      updateCart();
    });
  }
  ex3(buttons);
};

//updating the cart in the api
const updateCart = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts/7", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
    if (!response) {
      throw new error("Failed to update cart");
    }
    const cartData = await response.json();
    console.log("Cart updated successfully:", cartData);
  } catch (error) {
    throw new error("Error:", error);
  }
};

//info for ex 3
const ex3 = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const buttonId = event.target.id;

      // the id of the button is stored locally
      localStorage.setItem("clickedButtonId", buttonId);
    });
  });
};

cartButton();
