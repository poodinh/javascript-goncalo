let sum = (a=1,b=1) => {
    total=a+b;

    const promise = new Promise ((resolve, reject)=>{
        if (total%2===0) {
            setTimeout(()=> resolve ("par"),2000)
        } else{
            setTimeout(()=> reject ("impar"),2000)
        }})
    
    const asyncSum= async ()=>{
        console.log('waiting');
        try {const result= await promise;
            console.log(error)}
        catch(result){console.log(error)}
    };
    //o try catch n é necessário é só caso n quisermos ver a mensagem de erro!
    return asyncSum();
};

// posso por o asyncSum fora e assim chamamos a funçao assincrona e dá o que queriamos (tinha que tirar a parte do asyncSum q está dentro da função e fazer return da promise dentro da função)

// const asyncSum= async (x,y)=>{
//     console.log('waiting');
//     try {const result= await sum(x,y);
//         console.log(result)}
//     catch(result){console.log(result)}
// };