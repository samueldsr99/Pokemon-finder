const load = () => {
  const input = document.getElementById("search-input").value
  return srcPokemonByName(input)
  .then (data => fillPageData(data))
}

const fillPageData = (data) => {

console.log(data)

/*
const header = document.getElementById("details-header")
header.innerHTML = `This is the details page for ${data.name}`;

document.title = `Details for ${data.name}`;
*/
};




/*
window.onload = () => {
  // Esto es para tener en una variable los query strings (por ejemplo ?name=...)
  const params = new URLSearchParams(window.location.search);

  const data = params.get("name");

  fillPageData(data);
};
*/