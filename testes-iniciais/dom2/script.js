const div1=document.createElement('div');
div1.append('Isto é apenas para um exercício');
console.log(div1);

const texto= document.createTextNode('muito dificil');
div1.appendChild(texto);
console.log(div1);

const atributo = document.createAttribute('aria-label');
atributo.value='teste-teste';
div1.setAttributeNode(atributo);
console.log(div1);