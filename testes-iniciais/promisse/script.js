let soma = (a=1,b=1) =>{
    const total=a+b;

    const promise = new Promise((resolve,reject)=>{
        if (total%2===0){
            resolve('par');
        } else{
            reject('impar');
        }
    });

    promise.then((result)=>console.log(result)).catch((error)=>console.log(error));
};
