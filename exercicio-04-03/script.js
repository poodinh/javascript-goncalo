(function(){
    console.log('Isto foi demasiado rápido!');
})();

function form (campName){
    return function(name){
        console.log(campName + ': ' + name);
    };
};

function Product (name,value){
    this.name=name;
    this.value=value;
};

let batatas= new Product ('batata', 5);

batatas.value=2.5;

console.log(parseInt(batatas.value));