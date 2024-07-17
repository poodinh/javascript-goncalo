// se a palavra for javascript dá erro e diz q n é um nome

let name1 = (a='Gonçalo') => {

    const promise= new Promise((resolve,reject)=>{
        if (a=='javascript'){
            reject ('Isto não é um nome!')
        } else {
            resolve (`O nome é ${a}!`)
        };
    });
    promise.then((sucess)=> console.log(sucess)).catch((error)=> console.log(error));
}


let name2 = (a='Gonçalo') => {

    const promise= new Promise((resolve,reject)=>{
        if (a=='javascript'){
            reject ('Isto não é um nome!');
        } else {
            resolve (`O nome é ${a}!`);
        };
    });

    const nameAsync= async ()=>{
        const result = await promise;
        console.log(result);
    } //se não importar que apareça o erro
    const nameAsync2= async ()=>{
        try{const result = await promise;
        console.log(result);} 
        catch (e) {console.log(e)}
    } // se não quiser que apareça o erro
    return nameAsync2();
}

let name3 = (a='Gonçalo') => {

    const promise= new Promise((resolve,reject)=>{
        if (a=='javascript'){
            reject ('Isto não é um nome!');
        } else {
            resolve (`O nome é ${a}!`);
        };
    });
    return promise
}

const nameAsync3= async (x='Gonçalo')=>{
    const result = await name3(x);
    console.log(result);
}//se não importar que apareça o erro

const nameAsync4= async (x='Gonçalo')=>{
    try{const result = await name3(x);
    console.log(result);} 
    catch (e) {console.log(e)}
} // se não quiser que apareça o erro

