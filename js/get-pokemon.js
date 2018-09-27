// async await - funciones asíncronas
const BASE_API = 'https://pokeapi.co/api/v2/pokemon/';
async function getPokemon(id) {
  const response = await fetch(`${BASE_API}${id}/`);
  const pokemon =  await response.json();
  return pokemon;
  // console.log(pokemon);
}

export default getPokemon;