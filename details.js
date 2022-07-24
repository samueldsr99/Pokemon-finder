const fillPageData = (pokemonName) => {
  const header = document.getElementById("details-header");
  header.innerHTML = `This is the details page for ${pokemonName}`;

  document.title = `Details for ${pokemonName}`;
};

window.onload = () => {
  // Esto es para tener en una variable los query strings (por ejemplo ?name=...)
  const params = new URLSearchParams(window.location.search);

  const pokemonName = params.get("name");

  fillPageData(pokemonName);
};
