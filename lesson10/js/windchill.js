//---CALCULATE THE WINDCHILL---//
//get input values of temperature and wind speed
const tempNum = parseFloat(document.getElementById('temp').textContent);

const speedNum = parseFloat(document.getElementById('speed').textContent);

//calc windchill
let wc = 35.74 + (0.6215 * tempNum) - (35.75 * Math.pow(speedNum, 0.16)) + (0.4275 * tempNum * Math.pow(speedNum, 0.16));

windchill = Math.round(wc)

//Make sure inputs meet the requirements for calculating windchill
if (tempNum <= 50 && speedNum > 3){
    document.getElementById("chill").textContent = `${windchill}\xB0F`;
} else {
    document.getElementById("chill").textContent = "N/A";
}