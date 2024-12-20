function fetchData() {
  const pokemonName = document.getElementById('Pokemon').value.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          console.log('Data received:', data);
          const image = document.getElementById('P');
          image.src = data.sprites.front_default; // Pokémon's default front image
          image.style.display = 'block';
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Pokémon not found! Please check the name and try again.');
      });
}
