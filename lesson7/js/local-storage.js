// GET THE NUMBER OF DAYS BETWEEN CURRENT DATE & LAST DATE VISITED 
//get today's date
let currentVisit = new Date ().getTime();

const milliToDays = 8640000;
const pGallery = document.getElementById('days-btwn');

//last visit (stored in localStorage)
const lastVisit = localStorage.getItem('lastvisit');

console.log (lastVisit)
console.log (currentVisit)

//calculate num of days btwn
let daysBtwn = (currentVisit - lastVisit) / milliToDays;
console.log(daysBtwn);

//make sure they've visited before
if (!lastVisit || !daysBtwn) {
    pGallery.textContent = "Welcome, new user!";
} 
else if (daysBtwn < 1) {
    pGallery.textContent = "Welcome back! It's been 0 days since your last visit.";
}
else {
    //display the days btwn to user
    pGallery.textContent = `Welcome back! It's been ${Math.round(daysBtwn)} days since your last visit.`
    
}

localStorage.setItem('lastvisit', currentVisit)