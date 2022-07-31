//este fetch() es para buscar detalles
const URL_API_DETAILS = `https://pokeapi.co/api/v2/pokemon`;

const srcPokemonByName = (name) =>
  fetch(`${URL_API_DETAILS}/${name}`).then((response) => response.json());


//estas dos variables son para establecer intervalos a requerir
let limitValue = 10
let offset = 0

const URL_API_NAMES =`https://pokeapi.co/api/v2/pokemon?limit=`+`${limitValue}` + `&offset=${offset}`;
const loadPokeres = () =>
  fetch(URL_API_NAMES).then(response => response.json());