const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(townURL)
    .then (function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const towns = jsonObject['towns']

        //Home Page Towns
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
                    card.classList.add('imgr');
                } else {
                    card.classList.add('imgl');
                }


                ul.appendChild(founded);
                ul.appendChild(pop);
                ul.appendChild(rain);

                wordDiv.appendChild(h2);
                wordDiv.appendChild(ul);
                card.appendChild(wordDiv);
                card.appendChild(img);

                if (document.querySelector('div.towns') != null) {
                    document.querySelector('div.towns').appendChild(card);
                }

                
            }
        }
        //Events 

        let townName = document.querySelector('.town-name').textContent;

        switch (townName) {
            case 'Soda Springs':
                displayEvents(0);
                break;
            case 'Fish Haven':
                displayEvents(2);
                break;
            case 'Preston':
                displayEvents(6);
                break;
        }
        
        function displayEvents (page) {
            let eventsUl = document.querySelector('.town-events');

            for (let j = 0; j < towns[page].events.length; j++) {
                let li = document.createElement('li');

                li.textContent = towns[page].events[j];
                eventsUl.appendChild(li);
                
            }
        }
    })