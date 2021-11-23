const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(townURL)
    .then (function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
    console.table(jsonObject);

    const towns = jsonObject['towns']

    for (let i = 0; i < towns.length; i++) {

        if (i == 0 || i == 2 || i == 6) {
            let card = document.createElement('section');
            let wordDiv = document.createElement('div');
            let h2 = document.createElement('h2');
            let ul = document.createElement('ul') 
            let founded = document.createElement('li');
            let pop = document.createElement('li');
            let rain = document.createElement('li');
            let img = document.createElement('img');

            h2.textContent = towns[i].name;
            founded.textContent = `Year Founded: ${towns[i].yearFounded}`;
            pop.textContent = `Population: ${towns[i].currentPopulation}`;
            rain.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}in`;
            img.setAttribute('src', `images/${towns[i].photo}`);
            img.setAttribute('alt', `${towns[i].name} photo`);

            if (i == 0 || i == 6) {
                card.classList.add('imgr')
            } else {
                card.classList.add('imgl')
            }


            ul.appendChild(founded)
            ul.appendChild(pop)
            ul.appendChild(rain)

            wordDiv.appendChild(h2)
            wordDiv.appendChild(ul)
            card.appendChild(wordDiv)
            card.appendChild(img)

            document.querySelector('div.towns').appendChild(card);
        }
    }
    })