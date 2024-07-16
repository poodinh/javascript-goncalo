const products= async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const dataBase = await response.json();
    console.log(dataBase)
    const length= dataBase.length
    const images= dataBase.map(data => data.image);
    const titles= dataBase.map(data => data.title);
    const grid= document.createElement ('div');
    grid.setAttribute('class','products--grid');
    
    for (i=0; i<= length-1; i++){
        grid.insertAdjacentHTML("beforeend",
            `<div class='product--block'>
                <p>${titles[i]}</p>
                <img src="${images[i]}" alt="loading"></img>
            </div>`);
    }
console.log(grid)
    document.body.appendChild(grid)
    return grid
}

products()