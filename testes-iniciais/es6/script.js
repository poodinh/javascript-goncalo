let estudantes = [
    { 
        id: 1, 
        nome: 'João', 
        idade: 20 
    },
    { 
        id: 2, 
        nome: 'Maria', 
        idade: 22 
    },
    { 
        id: 3, 
        nome: 'Pedro', 
        idade: 18 
    },
    { 
        id: 4, 
        nome: 'Ana', 
        idade: 21 
    }
];

// let nomeEstudante = (i=1) => {
//     estudantes.forEach(estudante => 
//         {if (estudante.id===i) 
//             {console.log(estudante)
//             }
//         })
//     };
// Para de complicar!!!!!!!

let nomeEstudante = (i=1) => estudantes.find(estudante => estudante.id===i);

let nomesTodos= () => estudantes.forEach(estudante => console.log(`Nome do estudante: ${estudante.nome}`));
//let todosOsNomes= () => estudantes.map(estudante => `Nome do estudante: ${estudante.nome}`);

let maisVelhos= (a=20) => estudantes.filter(estudante => estudante.idade>a);