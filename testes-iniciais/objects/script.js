const eu= {
    nome:'Gonçalo',
    idade:'25',
    naturalidade:'Fânzeres'
};
console.log(eu);

const chaves= Object.keys(eu);
console.log(chaves);

const valores= Object.values(eu);
console.log(valores);

const entradas= Object.keys(eu);
console.log(entradas);

const tudo={
    chaves:Object.keys(eu),
    valores:Object.values(eu),
    entradas: Object.keys(eu),
};
console.log(tudo);