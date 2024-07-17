const cart ={
    userId:1,
    data: new Date().toISOString().split('-')[0],
    products:[]
}

const data= async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const dataBase = await response.json();
    return dataBase
}

const productsGrid = async () =>{
    const dataBase = await data();
    const dataSize= dataBase.length;
    const images= dataBase.map(data => data.image);
    const titles= dataBase.map(data => data.title);
    
    const grid= document.createElement ('div');
    grid.setAttribute('class','products--grid');
    document.body.appendChild(grid)
    
    for (i=0; i<= dataSize-1; i++){
        grid.insertAdjacentHTML("beforeend",
            `<div class='product--block'>
                <p>${titles[i]}</p>
                <img src="${images[i]}" alt="loading"></img>
            </div>`);
    }
    

    return grid
}


const cartButton = async () => {
    const dataBase = await data();
    const gridCreated = await productsGrid();

    const allIds=dataBase.map(data => data.id);

    const prodBlock = gridCreated.querySelectorAll('.product--block');
    prodBlock.forEach(div => {div.insertAdjacentHTML("beforeend",
        `<button> Add to Cart </button>`
    );});
    const buttons= gridCreated.querySelectorAll('button');


    for (i = 0; i <= dataBase.length-1; i++) {
        const prodId = allIds[i]
        
      
        buttons[i].addEventListener('click',()=>{
            const isProdInCart = cart.products.findIndex(prodInCart =>prodInCart.productId===prodId)
      
            if(isProdInCart !== -1){
                    cart.products[isProdInCart].quantity += 1;
                }else{
                    const product = {
                        productId: prodId,
                        quantity: 1
                    }
                    cart.products.push(product)
                }
            })  
        }

        
    };



cartButton()