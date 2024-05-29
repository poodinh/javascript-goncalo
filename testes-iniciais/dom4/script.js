const spanTeste= document.createElement('span');
document.body.append(spanTeste);
spanTeste.innerHTML='teste';

spanTeste.classList.add('pink');

spanTeste.addEventListener('click',()=>spanTeste.classList.toggle('clicked'));

const buttonTeste= document.createElement('button');
document.body.append(buttonTeste);

buttonTeste.addEventListener('mouseover',()=>buttonTeste.classList.add('over'));
buttonTeste.addEventListener('mouseout',()=>buttonTeste.classList.remove('over'));
