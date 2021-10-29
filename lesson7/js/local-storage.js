// GET THE NUMBER OF DAYS BETWEEN CURRENT DATE & LAST DATE VISITED 
//get today's date
let currentVisit = new Date ();

const milliToDays = 8640000;
const pGallery = document.getElementById('days-btwn');

//last visit (stored in localStorage)
const lastVisit = localStorage.getItem('lastvisit');

//calculate num of days btwn
let daysBtwn = lastVisit - currentVisit / milliToDays;
console.log(daysBtwn);

//make sure they've visited before
if (!lastVisit || !daysBtwn) {
    pGallery.textContent = "Welcome, new user!";
} 
else {
    //display the days btwn to user
    pGallery.textContent = `It has been ${daysBtwn} days since your last visit.`
    
}

localStorage.setItem('lastvisit', currentVisit)