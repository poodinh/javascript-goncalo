function division(b){
    return function(a){
        return (a / b);
    }
};
const divisionBy2 = division(2);

console.log(divisionBy2(5));
console.log(division(2)(6));


function divide(a){
    return function(b){
        return (a / b);
    }
};

console.log(divide(6)(2));
