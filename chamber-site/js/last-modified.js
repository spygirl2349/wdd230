// Display the Last Modified Date in the footer
const date = new Date (document.lastModified);

let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

let today = date.toLocaleString('en-GB', options);

document.getElementById('lastMod').textContent = today;