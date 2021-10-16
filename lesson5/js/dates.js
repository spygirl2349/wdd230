const date = new Date(document.lastModified);

let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
let today = date.toLocaleString('en-GB', options);

document.getElementById("currentDate").textContent = today;

//----Create a Banner that only shows up on Fridays----
banner = document.getElementById("banner");
let newP = document.createElement("p");

//get the current day of the week
const todayDate = new Date()
let day = todayDate.getDay()

//Set text content for new <p> element
newP.textContent = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."

//only show if it's Friday
if (day == 5){
    banner.append(newP);
}
else {
    banner.classList("")
}

