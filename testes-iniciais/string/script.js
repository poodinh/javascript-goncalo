let texto='não sei o que escrever';

const comp=texto.length;
console.log(comp);

const posiçãoSegundaPalavra=texto.indexOf('sei');
console.log(posiçãoSegundaPalavra);

const novoTexto=texto.replace('não', 'JavaScript é espetacular');
console.log(novoTexto);

const min=texto.toLowerCase();
console.log(min);

const max=texto.toUpperCase();
console.log(max);

const separa=novoTexto.split('espetacular');
console.log(separa);
