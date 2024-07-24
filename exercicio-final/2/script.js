
//getting the data
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

  const allIds = dataBase.map((data) => data.id);

  //creation of the buttons
  const prodBlock = gridCreated.querySelectorAll(".product--block");
  prodBlock.forEach((div) => {
    div.insertAdjacentHTML("beforeend", `<button> Add to Cart </button>`);
  });

  //creation of the updating the cart functions to the buttons
  const buttons = gridCreated.querySelectorAll("button");

  for (i = 0; i <= dataBase.length - 1; i++) {
    const prodId = allIds[i];

    buttons[i].addEventListener("click", () => {
        const isProdInCart = cart.products.findIndex(
            (prodInCart) => prodInCart.productId === prodId
        );
        if (isProdInCart !== -1) {
            //updating the quantity in the cart and the API
            cart.products[isProdInCart].quantity += 1;
            const updateCart= async ()=>{
                try{
                    const response = await fetch("https://fakestoreapi.com/carts/7", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(cart),
                    });
                    if (response.ok) {
                        const cartData = await response.json();
                        console.log('Cart updated successfully:', cartData);
                    } else {
                        console.error('Failed to update cart');
                    }
                }
                catch(error) {
                    console.error('Error:', error);
                }
            }
            updateCart()
        } else {
            //creating a new cart 
            const product = {
                productId: prodId,
                quantity: 1,
            };
            cart.products.push(product);
            const createCart= async ()=>{
                try{
                    const response = await fetch("https://fakestoreapi.com/carts/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(cart),
                    });
                    if (response.ok) {
                        const cartData = await response.json();
                        console.log('Cart sent successfully:', cartData);
                    } else {
                        console.error('Failed to send cart');
                    }
                }
                catch(error) {
                    console.error('Error:', error);
                }
            }
            createCart()
            
        }
        
        
        
        
    });
    
  }
};

cartButton();
