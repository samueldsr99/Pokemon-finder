const URL_API = `https://pokeapi.co/api/v2/pokemon`;

const srcPokemonByName = (name) =>
  fetch(`${URL_API}/${name}`).then((response) => response.json());
