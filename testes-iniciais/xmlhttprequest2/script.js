const animeByYear = (year=2023)=> {
    const request= new XMLHttpRequest();

    request.open('GET','https://api.jikan.moe/v4/top/anime');

    request.send();

    request.responseType='json';

    request.onload = () =>{
        const animes= request.response.data;
    
        const animesYear= animes.filter((animeYear)=>animeYear.year==year)
        
        if(animesYear.length!=0){
            animesYear.map(name => console.log(name.title));
        }else{
            console.log(`O ano ${year} não tem conteúdos!`);
        }
    }
};


const promiseAnime = (year=2023) => {
    return new Promise ((resolve,reject)=>{
        const request= new XMLHttpRequest();

        request.open('GET','https://api.jikan.moe/v4/top/anime');
        
        request.onerror=()=>reject('error!')

        request.send();

        request.responseType='json';

        request.onload = () =>{
            const animes= request.response.data;
        
            const animesYear= animes.filter((animeYear)=>animeYear.year==year)
            
            if(animesYear.length!=0){
                const names = animesYear.map(name => name.title);
                resolve(names);
            }else{
                resolve(`O ano ${year} não tem conteúdos!`);
            }
        }
        })
}