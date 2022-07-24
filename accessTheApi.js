const URL_API = `https://pokeapi.co/api/v2/pokemon/pikachu`
//var name = 'pikachu'


fetch(`${URL_API}`)
        .then(response => response.json())
        .then(data => console.log(data))  


/*
const srcPokemonByName = (name) => {
    fetch(`${URL_API}?${name}`)
        .then (response => response.json())
        .then(data => console(data))        
} 
*/    