const apiURL = '//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ae3df22411a81915e415e33bf24600fd&units=imperial';

fetch(apiURL)
    .then((response) => response.json ())
    .then((jsObject) => {
        console.table(jsObject);

        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        const desc = jsObject.weather[0].description;

        document.getElementById('imagesrc').textContent = imgsrc;
        document.getElementById('icon').setAttribute('src', imgsrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });

const apiURLf = '//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ae3df22411a81915e415e33bf24600fd&units=imperial';

fetch(apiURLf)
    .then((response) => response.json ())
    .then((jsObject) => {
        console.table(jsObject);

        document.getElementById('current-temp1').textContent = jsObject.list[0].main.temp;

        const imgsrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`; // 'https://openweathermap.org/img/w/13n.png'

        const desc = jsObject.list[0].weather[0].description;

        document.getElementById('imagesrc1').textContent = imgsrc;
        document.getElementById('icon1').setAttribute('src', imgsrc);
        document.getElementById('icon1').setAttribute('alt', desc);
    });