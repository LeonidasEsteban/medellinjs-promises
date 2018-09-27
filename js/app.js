import getPokemon from './get-pokemon.js';

const $image = document.querySelector('#image');
const $name = document.querySelector('#name');
const $form = document.querySelector('#form');

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(event);
  const form = new FormData($form);
  const id = form.get('name');
  const pokemon = await getPokemon(id);
  $image.setAttribute('src', pokemon.sprites.front_default)
  $name.innerHTML = `<strong>${pokemon.name}</strong>`

})


