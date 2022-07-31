// Logica referente a details.html
const fillPageData = (data) => {
  console.log(data);

  document.title = `Details for ${(data.name).toUpperCase()}`;

  const imgCards = document.getElementById("imgCards");
  imgCards.src = data.sprites.other.dream_world.front_default

  const pokeName = document.getElementById("pokeName")
  pokeName.innerHTML = (data.name).toUpperCase()

  const header = document.getElementById("details-header");
  header.innerHTML = `DETAILS FOR ${(data.name).toUpperCase()}:`;

  const hp = document.getElementById("hp");
  hp.innerHTML = `HP: ${data.stats[0].base_stat}`

  const attack = document.getElementById("attack");
  attack.innerHTML = `Attack: ${data.stats[1].base_stat}`

  const defense = document.getElementById("defense");
  defense.innerHTML = `Defense: ${data.stats[2].base_stat}`

  const speed = document.getElementById("speed");
  speed.innerHTML = `Speed: ${data.stats[3].base_stat}`

  const special_defense = document.getElementById("special_defense");
  special_defense.innerHTML = `Special defense: ${data.stats[4].base_stat}`

  const special_attack = document.getElementById("special_attack");
  special_attack.innerHTML = `Special attack: ${data.stats[4].base_stat}`

};

window.onload = () => {
  // Esto es para tener en una variable los query strings (por ejemplo ?name=...)
  const params = new URLSearchParams(window.location.search);

  const pokemonName = params.get('name');
  
  srcPokemonByName(pokemonName).then((data) => fillPageData(data));
};
