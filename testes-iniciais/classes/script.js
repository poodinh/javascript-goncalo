class Car{
    constructor(brand, model){
        this.brand=brand;
        this.model=model;
    }
    display(){
        return `Este é um ${this.brand} ${this.model}`;
    }
}

const yaris = new Car('toyota', 'yaris');
const corsa = new Car('opel', 'corsa');

console.log(yaris.display());
console.log(corsa.display());

class Suv extends Car {
    constructor(brand, model, isSuv){
        super(brand, model);
        this.isSuv=isSuv;
    }
    display(){
        return `Este carro é ${this.brand} ${this.model} e ${this.isSuv ===true? 'é um SUV' : "não é um Suv"}`;
    }
}

const yaris2 = new Suv('toyota', 'yaris', false);
console.log(yaris2.display());
