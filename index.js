// Logica referente a index.html
function start(e) {
  if (e.keyCode == 13) {
      load()
  }
}
window.onkeypress = start;

const load = () => {
  // en vez de input ponle inputValue, porque lo q guardas ahí es el valor del input
  // nada... cosas semánticas
  const inputValue = document.getElementById("search-input").value;

  // Esto es lo del redirect
  window.location.replace(`/details.html?name=${inputValue}`);
};
