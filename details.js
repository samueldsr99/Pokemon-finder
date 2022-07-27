// Logica referente a details.html

const fillPageData = (pokeData) => {
  console.log(pokeData);

  const header = document.getElementById("details-header");
  header.innerHTML = `This is the details page for ${data.name}`;

  document.title = `Details for ${data.name}`;

};

window.onload = () => {
  // Esto es para tener en una variable los query strings (por ejemplo ?name=...)
  const params = new URLSearchParams(window.location.search);

  // Aquí no estabas haciendo el fetch
   fetch(`https://pokeapi.co/api/v2/pokemon?name=${input}`)
  const pokemonName = params.get("name");
 

  srcPokemonByName(pokemonName).then((data) => fillPageData(data));
};