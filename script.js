function getCharacters() {
    fetch("https://rickandmortyapi.com/api/character/?page=19")
        .then(response => response.json())
        .then(data => appendData(data.results))
        .catch(error => console.error("Erro ao carregar os personagens", error));
}

function appendData(characters) {
    const container = document.querySelector("#card-container");
    container.innerHTML = characters.map(character => `
        <div class="card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <div class="status ${character.status.toLowerCase()}">${character.status}</div>
            <p>Espécie: ${character.species}</p>
            <p>Tipo: ${character.type || 'N/A'}</p>
            <p>Origem: ${character.origin.name}</p>
            <p>Localização: ${character.location.name}</p>
        </div>
    `).join('');
}

getCharacters();
