const BASE_URL = `https://pokeapi.co/api/v2`;

const srcPokemonByName = (name) =>
  fetch(`${BASE_URL}/pokemon/${name}`).then((response) => response.json());

const URL_API_NAMES = `https://pokeapi.co/api/v2/pokemon?limit=`;

const loadPokeres = () =>
  fetch(URL_API_NAMES + `${limitValue}` + `&offset=${offset}`).then(
    (response) => response.json()
  );

const getPokemons = (offset, limit) =>
  fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`).then((r) =>
    r.json()
  );
