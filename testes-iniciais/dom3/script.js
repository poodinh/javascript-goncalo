const divTeste= document.createElement('div');
document.body.append(divTeste);

// let ul1= '<ul>';
// let li1 ='<li>Exemplo 01</li>';
// let li2 ='<li>Exemplo 02</li>';
// let ul2 = '</ul>';
// let p = '<p>isto é uma div</p>'

// divTeste.innerHTML =`
// ${ul1}
// ${li1}
// ${li2}
// ${ul2}
// ${p}`;

divTeste.innerHTML =`
<ul>
<li>Exemplo 01</li>
<li>Exemplo 02</li>
</ul>
<p>isto é uma div</p>`;


const lii= divTeste.querySelector('li'); //tmbm dava se fosse document em vez de divTeste

lii.insertAdjacentHTML('afterend','<li>Nova li</li>');

const removeP= divTeste.querySelector('p'); //tmbm dava se fosse document em vez de divTeste
removeP.remove();
