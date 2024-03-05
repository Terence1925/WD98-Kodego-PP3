fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Could not found resource");
    }
    const data = await response.json();

    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    const pokemonType = data.types[0].name;
    const typeElement = document.getElementById("pokemonType");
    typeElement.textContent = pokemonType;

    const pokemonId = data.held_items.id;
    const idElement = document.getElementById("pokemonId");
    idElement.textContent = pokemonType;
  } catch (error) {
    console.error(error);
  }
}
