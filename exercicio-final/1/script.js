const tshirt ={name:'t-shirt',price:35, id:1};

class Ecommerce{
    constructor(){
        this.cart=[],
        this.productList=[]
    };

    addProduct(product= tshirt){
        if(typeof product === 'object' && !Array.isArray(product) && product !== null){
            if (typeof product.name === 'string' && typeof product.price === 'number' && typeof product.id === 'number')
                {this.productList.push(product);}
            else if(typeof product.name !== 'string')
                {return "Object doesn't have a name!";}
            else if(typeof product.price !== 'number')
                {return "Object doesn't have a price!";}
            else if(typeof product.id !== 'number')
                {return "Object doesn't have an id!";}
            else
                {return 'Invalid object! It needs a name, price and id!';}
        } 
        else 
            {return "Parameter introduced isn't an object!"}
    }

    setProductPrice(productId=1,price=20){
        if (typeof productId === 'number' && typeof price === 'number'){
            const changePriceProduct = this.productList.find(product => product.id === productId);
            if (changePriceProduct)
                {changePriceProduct.price=price;} 
            else{return "Product isn't on the list!"}
        } 
        else if(typeof productId !== 'number')
            {return "The given product id isn't a number!"} 
        else if(typeof price !== 'number')
            {return "The given product price isn't a number!"}
        else
            {return "Introduced values aren't valid! They should be two numbers!"}

    }

    getAllProducts(){
        if (this.productList)
            {return this.productList;} 
        else
            {return "There isn't any products on the list!"}
    }

    getAllProductsNames(){
        if (this.productList){
            const productNames= this.productList.map(product => product.name);
            return productNames.join('; ');
        } else
            {return "There isn't any products on the list!"}
    }   

    getProductById(productId=1){
        if (typeof productId === 'number'){
            const productById = this.productList.find(product => product.id === productId);
            if (productById == undefined)
                {return "There isn't any products on the list with said id!"}
            else
                {return productById}
            }
        else
            {return "The given product id isn't a number!"}
    }

    getProductByName(productName='t-shirt'){
        if (typeof productName === 'string'){
            const productByName = this.productList.find(product => product.name === productName);
            if (productByName == undefined)
                {return "There isn't any products on the list with said name!"} 
            else{return productByName}
        }
        else
            {return "The given product name isn't a string!"}
    }

    getProductsByPrice(initialPrice=0, finalPrice=50){
        if (typeof initialPrice === 'number' && typeof finalPrice === 'number'){
            const productsByPrice= this.productList.filter(product => product.price >= initialPrice && product.price <= finalPrice);
            if (productsByPrice == [])
                {return "There isn't any products on the list between those prices!"} 
            else
            {return productsByPrice}
        }
        else if(typeof initialPrice !== 'number')
            {return "The given initial price isn't a number!"} 
        else if(typeof finalPrice !== 'number')
            {return "The given final price isn't a number!"}
        else
            {return "Introduced values aren't valid! They should be two numbers!"}
    }

    addProductToCart(product = tshirt){
        if(typeof product === 'object' && !Array.isArray(product) && product !== null){
            if (typeof product.name === 'string' && typeof product.price === 'number' && typeof product.id === 'number')
                {this.cart.push(product);}
            else if(typeof product.name !== 'string')
                {return "Object doesn't have a name!";}
            else if(typeof product.price !== 'number')
                {return "Object doesn't have a price!";}
            else if(typeof product.id !== 'number')
                {return "Object doesn't have an id!";}
            else
                {return 'Invalid object! It needs a name, price and id!';}
        } 
        else 
            {return "Parameter introduced isn't an object!"}
    }

    getCart(){
        if (this.cart)
            {return this.cart;} 
        else
            {return "The cart is empty!"}
    }

    getCartTotalPrice(){
        if (this.cart == [])
            {return "The cart is empty!"}
        else{
            return this.cart.reduce((total, product)=>(total += product.price),0)
        }
    }
}



 