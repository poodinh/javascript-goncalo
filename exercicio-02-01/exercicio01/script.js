let paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia'];

for(i=0;i<10;i++){
    console.log(paises[i])
};

nrItems= paises.length;

paises.unshift('Portugal');
paises.push('Espanha');

console.log(paises.splice(10));
console.log(paises.join('-'));