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

//resolução prof em baixo

// const findAnimeByYear= (yearParam=2023) => {
//     const request= new XMLHttpRequest();
//     request.open('GET', 'https://api.jikan.moe/v4/top/anime');
//     request.responseType= 'json';
//     request.send();
    
//     request.onload = () =>{
//         const animesList=request.response.data;
        
//         const animesFiltered = animesList.filter((animeItem) => animeItem.year===yearParam);
    
//         if (animesFiltered.length === 0){
//             console.log( `O ano ${yearParam} não tem conteúdos.`);
//         } else{
//             animesFiltered.map(anime => console.log(anime.title));
//         }
//     }
// };

// const findAnimeByYear= (yearParam=2023) => {
//     const promise = new Promise ((resolve, reject) => {

//         const request= new XMLHttpRequest();
//         request.open('GET', 'https://api.jikan.moe/v4/top/anime');
//         request.responseType= 'json';
//         request.send();
        
//         request.onload = () =>{
//             const animesList=request.response.data;
            
//             const animesFiltered = animesList.filter((animeItem) => animeItem.year===yearParam);
        
//             if (animesFiltered.length === 0){
//                 resolve( `O ano ${yearParam} não tem conteúdos.`);
//             } else{
//                 const titles= animesFiltered.map(name => name.title);
//                 resolve(titles);
//             }
//         }
//     });
//     return promise
// };
