async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Function to display fetched data
function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous data

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${item.name || item.title}</h5>
                <p class="card-text">${item.gender || item.opening_crawl}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Event listeners for fetch buttons
document.getElementById('fetch-people').addEventListener('click', async () => {
    const people = await fetchData('https://swapi.dev/api/people/');
    displayData(people.results);
});

document.getElementById('fetch-films').addEventListener('click', async () => {
    const films = await fetchData('https://swapi.dev/api/films/');
    displayData(films.results);
});

document.getElementById('fetch-planets').addEventListener('click', async () => {
    const planets = await fetchData('https://swapi.dev/api/planets/');
    displayData(planets.results);
});
