const animeByYear = (year=2023)=> {
    fetch('https://api.jikan.moe/v4/top/anime')
        .then((response)=>response.json())
        .then((animes)=>animes.data)
        .then((animesYear)=> animesYear.filter((animeYear)=>animeYear.year==year))
        .then((animesFiltered)=> {if(animesFiltered.length!=0){
            animesFiltered.map(name => console.log(name.title));
        }else{
            console.log(`O ano ${year} não tem conteúdos!`);
        }});
};
//a usar menos thens
const animeByYear2 = (year=2023)=> {
    fetch('https://api.jikan.moe/v4/top/anime')
        .then((response)=>response.json())
        //também dava aqui com .then((animes)=>animes.data) e depois cortava a primeira linha do próximo then e o parametro era o x em x.filter
        .then((animes)=> {
            const animesList = animes.data
            const animesFiltered=animesList.filter((animeItem)=>animeItem.year==year)
            if(animesFiltered.length!=0){
                 animesFiltered.map(name => console.log(name.title));
            }else{
                 console.log(`O ano ${year} não tem conteúdos!`);
            };
        })
};



//prof

const loadAnimesByYear = async (year=2023) => {
    const resposta= await fetch('https://api.jikan.moe/v4/top/anime');
    const dadosResposta = await resposta.json();
    const animesList= dadosResposta.data;
    const animesFiltered = animesList.filter((animeItem)=> animeItem.year===year);
    return (
        animesFiltered.length===0 
        ? `O ano ${year} não tem conteúdos!`
        : animesFiltered.map((animeItem)=>animeItem.title)); //return aparece dentro da promise, console.log aparece fora
}