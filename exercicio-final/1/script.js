const tshirt ={name:'t-shirt',price:35, id:1};
const jeans={name:'jeans',price:50};
const sweater={name:'sweater', id:2};
const jacket={price:45, id:4};

class Ecommerce{
    constructor(){
        this.cart=[],
        this.productList=[]
    };

    addProduct(product= tshirt){
        if(typeof product === 'object' && !Array.isArray(product) && product !== null){
            const objKeys = Object.keys(product)
            if (objKeys.lastIndexOf('name') >=0 && objKeys.lastIndexOf('price') >=0 && objKeys.lastIndexOf('id') >=0){
                const idProdRepeat = this.productList.find(prod => prod.id=product.id)
                idProdRepeat?
                    console.log("This product already exists on the list!"):
                    this.productList.push(product);
                //what's commented above is in case we dont't want repeats on our list. If it's the product of the lists available in the store it makes sense. Not on the cart though
                //this.productList.push(product);
            }
            else if(objKeys.lastIndexOf('name') <0)
                {return "Object doesn't have a name!";}
            else if(objKeys.lastIndexOf('price') <0)
                {return "Object doesn't have a price!";}
            else if(objKeys.lastIndexOf('id') <0)
                {return "Object doesn't have an id!";}
            else
                {return 'Invalid object! It needs a name, price and id!';}
        } 
        else 
            {return "Parameter introduced isn't an object!"};
    }

    setProductPrice(productId=1,price=20){
        if (typeof productId === 'number' && typeof price === 'number'){
            const changePriceProduct = this.productList.find(product => product.id === productId);
            changePriceProduct?
                changePriceProduct.price=price: 
                console.log("Product isn't on the list!");
        } 
        else if(typeof productId !== 'number')
            {return "The given product id isn't a number!";} 
        else if(typeof price !== 'number')
            {return "The given product price isn't a number!";}
        else
            {return "Introduced values aren't valid! They should be two numbers!";};

    }

    getAllProducts(){
        this.productList?
            console.log(this.productList):
            ("There isn't any products on the list!");
    }

    getAllProductsNames(){
        this.productList?
            console.log(this.productList.map(product => product.name).join('; ')):
            console.log("There isn't any products on the list!")
    }   

    getProductById(productId=1){
        if (typeof productId === 'number'){
            const productById = this.productList.find(product => product.id === productId);
            productById == undefined?
                console.log("There isn't any products on the list with said id!"):
                console.log(productById);
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
            productsByPrice == []?
                console.log("There isn't any products on the list between those prices!"):
                console.log(productsByPrice);
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
            const objKeys = product.keys()
            if (objKeys.lastIndexOf('name') >=0 && objKeys.lastIndexOf('price') >=0 && objKeys.lastIndexOf('id') >=0)
                {this.cart.push(product);}
            else if(objKeys.lastIndexOf('name') <0)
                {return "Object doesn't have a name!";}
            else if(objKeys.lastIndexOf('price') <0)
                {return "Object doesn't have a price!";}
            else if(objKeys.lastIndexOf('id') <0)
                {return "Object doesn't have an id!";}
            else
                {return 'Invalid object! It needs a name, price and id!';}
        } 
        else 
            {return "Parameter introduced isn't an object!"}
    }

    getCart(){
        this.cart?
            console.log(this.cart):
            console.log("The cart is empty!")
    }

    getCartTotalPrice(){
        this.cart == []?
            console.log("The cart is empty!"):
            console.log(this.cart.reduce((total, product)=>(total += product.price),0))
    }
}


const store= new Ecommerce;
 