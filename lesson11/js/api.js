let townName = document.querySelector('.town-name').textContent;
let cityId = 0

switch (townName) {
    case 'Soda Springs':
        cityId = 5607916;
        break;
    case 'Fish Haven':
        cityId = 5585000;
        break;
    case 'Preston':
        cityId = 5604473;
        break;
}

let apiURL = `//api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=ae3df22411a81915e415e33bf24600fd&units=imperial`;

const mydate = new Date ();
const todayNum = mydate.getDay();

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

let forecastDayNum =todayNum;

fetch(apiURL)
    .then((response) => response.json ())
    .then((jsObject) => {
        console.log(jsObject);

        //Weather Summary
        document.getElementById('current').textContent = jsObject.list[0].weather[0].main
        document.getElementById('icon').src = `//openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
        document.getElementById('icon').alt = jsObject.list[0].weather[0].main;
        document.getElementById('temp').textContent = Math.round(jsObject.list[0].main.temp);
        document.getElementById('speed').textContent = jsObject.list[0].wind.speed;
        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;

        //Five Day Forecast

        // document.getElementById('townName').textContent = jsObject.city.name

        const mylist = jsObject.list

        for (i=0; i < mylist.length; i++) {
        var time = mylist[i].dt_txt;
        if (time.includes('18:00:00')) {
            let theDayName = document.createElement('h5');
            let theTemp = document.createElement("p");
    
            //Create icon and set src
            const iconcode = mylist[i].weather[0].icon;
            const icon_path = `//openweathermap.org/img/w/${iconcode}.png`;
            let theIcon = document.createElement("img");
            theIcon.src = icon_path;
    
            theDayName.textContent = myweekday[forecastDayNum];
            theTemp.textContent = `${Math.round(jsObject.list[i].main.temp)}\xB0F`;
    
            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);
    
            document.querySelector(".five-day").appendChild(theDay);
    
            forecastDayNum += 1;
            if (forecastDayNum === 7){
            forecastDayNum = 0;
            }
        }
        }
    });