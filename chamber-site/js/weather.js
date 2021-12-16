const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5605242&appid=ae3df22411a81915e415e33bf24600fd&units=imperial"

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

fetch (apiURL)
    .then((response) => response.json ())
    .then((jsW) => {
        console.log (jsW);
        //CURRENT WEATHER GOES HERE
        let current = document.createElement('p');
        let temp = document.createElement('p');
        let speed = document.createElement('p');
        let humidity = document.createElement('p');

        let cW = document.getElementById("currentW")

        current.textContent = `Currently: ${jsW.list[0].weather[0].description}`;
        temp.textContent = `Temp: ${jsW.list[0].main.temp}\xB0F`;
        speed.textContent - `Wind Speed: ${jsW.list[0].wind.speed}`;
        humidity.textContent = `Humidity: ${jsW.list[0].main.humidity}`;

        cW.appendChild(current);
        cW.appendChild(temp);
        cW.appendChild(speed);
        cW.appendChild(humidity);

        //THREE DAY FORECAST
        const mylist = jsW.list

        for (i=0; i < mylist.length; i++) {
        var time = mylist[i].dt_txt;
        if (time.includes('18:00:00') && i <= 21) {
            let theDayName = document.createElement('h5');
            let theTemp = document.createElement("p");
    
            //Create icon and set src
            const iconcode = mylist[i].weather[0].icon;
            const icon_path = `//openweathermap.org/img/w/${iconcode}.png`;
            let theIcon = document.createElement("img");
            theIcon.src = icon_path;
    
            theDayName.textContent = myweekday[forecastDayNum];
            theTemp.textContent = `${Math.round(jsW.list[i].main.temp)}\xB0F`;
    
            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);
    
            document.querySelector(".three-day").appendChild(theDay);
    
            forecastDayNum += 1;
            if (forecastDayNum === 7){
            forecastDayNum = 0;
            }
        }
        }        
    })

//WEATHER ALERT

let alertApi = "https://api.openweathermap.org/data/2.5/onecall?lat=43.82&lon=-111.78&exclude=current,minutely,hourly,daily&appid=ae3df22411a81915e415e33bf24600fd"

let banner = document.getElementById("banner");
let newP = document.createElement("p");
let button = document.createElement("button");

button.textContent = "X";
button.setAttribute("onclick", "closeBanner()")
button.id = "xbtn"

        
fetch (alertApi)
    .then ((response)=> response.json())
    .then ((jsAlert) => {
        console.log(jsAlert)

        // //testing banner here
        // newP.textContent = "Hello this is a test!"
        // banner.append(newP);
        // banner.append(button);

        if (jsAlert.alert != null) {
            newP.textContent = jsAlert.alerts.description

            banner.append(newP);
            banner.append(button);
        }
    })

function closeBanner () {
    newP.remove();
    button.remove();
};