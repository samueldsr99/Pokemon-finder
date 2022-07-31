// Logica referente a pokeList.html

//esto se ejecuta con el onclick() en el boton rojo generate +10
const generatePokes = () => {

    loadPokeres().then(data => (data.results).forEach(pokemon => fetchPokeData(pokemon)))

    const fetchPokeData = (pokemon) => {
        const URL = pokemon.url
        fetch(URL)
        .then(response => response.json())
        .then(pokeData => renderPokeData(pokeData))   
    }
}


const renderPokeData = (pokeData) => {
    let allPokemonContainer = document.getElementById('cardContainer');

    let linkToDetails = document.createElement("a")
    linkToDetails.setAttribute("href",`./details.html?name=` + `${pokeData.name}`)

    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.setAttribute("id","newCards")
    pokeContainer.classList.add("newCards")

    let pokeImg = document.createElement('img')
    pokeImg.src = pokeData.sprites.other.dream_world.front_default
    pokeImg.setAttribute("id","pokeImg")
    pokeImg.classList.add("pokeImg")

    let pokeName = document.createElement('h4')
    pokeName.innerText = (pokeData.name).toUpperCase()
    pokeName.classList.add("pokeName")

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `ID:${pokeData.id}`    

    //let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types

    //createTypes(pokeData.types, pokeTypes) // helper function to go through the types array and create li tags for each one
    
    pokeContainer.append(pokeNumber, pokeImg, pokeName  /*,pokeTypes*/); //appending all details to the pokeContainer div
    
    linkToDetails.appendChild(pokeContainer)

    allPokemonContainer.appendChild(linkToDetails);//appending that pokeContainer div to the main div which will hold all the pokemon cards
    
}

/*
const createTypes = (types, ul) => types.forEach((type) => {
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.append(typeLi)
    })
*/  
















/*
const input = document.querySelector(`#filterPokemon`)
const pokeresList = document.querySelector(`#pokeres`)


window.addEventListener(`DOMContentLoaded`, () => {

    //Function for incert the name
    loadPokeres()
    .then(pokes =>{ 
        function getNames() {
            for (let i = 0; i < 50; i++){
                pokeresList.innerHTML += (`<li>${pokes.results[i].name}</li>`)
            }
        }
        getNames()
    })
    
})

input.addEventListener(`keyup`, e => {
    console.log(input.value)
})
*/

    
