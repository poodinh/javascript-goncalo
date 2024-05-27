

const ratoCima= () => console.log('rato em cima');
const ratoFora= () => console.log('rato saiu');


const botoes = document.querySelectorAll('button');  //se usar forEach n posso usar getElementsByTagName porque dá-nos um objeto e não um array
botoes.forEach(botao => botao.addEventListener('mouseover', ratoCima));
botoes.forEach(botao => botao.addEventListener('mouseout', ratoFora));


//------//

const adicionarID= () => {
    botoes[0].setAttribute=('id','botao1');
}

setTimeout(adicionarID,5000)