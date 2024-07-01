class Ecommerce{
    constructor(){
        this.cart=[],
        this.productList=[]
    };
    
    addProduct(product){
        if (typeof product.name === 'string' && typeof product.price === 'number' && typeof product.id === 'number')
            {this.productList.push(product)}
        else if(typeof product.name !== 'string')
            {return "Object doesn't have a name!"}
        else if(typeof product.price !== 'number')
            {return "Object doesn't have a price!"}
        else if(typeof product.id !== 'number')
            {return "Object doesn't have an id!"}
        else{return 'Invalid object! It needs a name, price and id!'}
    }

    setProductPrice(productId,price){
        const changePriceProduct = this.productList.find(product => product.id === productId)
        if (changePriceProduct){
            changePriceProduct.price=price
        } else{
            return "Product isn't on the list!"
        }
    }
}



