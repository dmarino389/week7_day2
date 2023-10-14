document.getElementById('pokemonForm').addEventListener('submit', getPokemonDetails);

async function getPokemonDetails(e) {
  e.preventDefault();
  
  const pokemonName = document.getElementById('pokemonName').value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const container = document.getElementById('container');
    container.innerHTML = '';

    let card = `
      <div>
        <h3>Name: ${data.name}</h3>
        <h4>Height: ${data.height}</h4>
        <h4>Weight: ${data.weight}</h4>
        <h4>Base Experience: ${data.base_experience}</h4>
        <h4>Abilities:</h4>
        <ul>
    `;
    
    data.abilities.forEach(ability => {
      card += `<li>${ability.ability.name}</li>`;
    });

    card += `
        </ul>
      </div>
    `;
    
    container.innerHTML = card;

    console.log(`Name: ${data.name}`);
    console.log(`Height: ${data.height}`);
    console.log(`Weight: ${data.weight}`);
    console.log(`Base Experience: ${data.base_experience}`);
    console.log('Abilities');

  } catch (error) {
    console.error('An error occurred', error);
  }
}
