let array= ['um', 'dois'];
let comp= array.length;
console.log(comp);

let secondArray=['um','dois','três'];
let stringSecondArray=secondArray.toString();
console.log(stringSecondArray)

let thirdArray=['um','dois','três'];
thirdArray.pop();
thirdArray.shift();
console.log(thirdArray);

let fourthArray=['a','b','c'];
fourthArray.push('d');
console.log(fourthArray);

let fifthArray=['a','b']
let dividido= fifthArray.join('/');
console.log(dividido);

let sixthArray=['um','dois','três','quatro'];
let seventhArray=['cinco','seis','sete','oito'];
let eightArray=sixthArray.concat(seventhArray);
console.log(eightArray);
// console.log(sixthArray.concat(sixthArray)); se quiser só ver sem criar um novo array