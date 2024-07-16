const products= async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const dataBase = await response.json();
    const length= dataBase.length
    const images= dataBase.map(data => data.image);
    const titles= dataBase.map(data => data.title);
    const grid= document.createElement ('div');
    grid.setAttribute('class','products--grid');
    let block = document.grid.createElement('div');
    block.setAttribute('class','product--block');

    for (i=0; i<=(length-1); i++){
        block.innerHTML=
            `<p>${titles[i]}</p>
            <img src=${images[i]} alt="loading">`;
        grid= grid + block;
    }
    console.log(grid)
    return grid
}