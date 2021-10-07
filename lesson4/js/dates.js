const date = new Date(document.lastModified)

let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}
let today = date.toLocaleString('en-GB', options)

document.getElementById("currentDate").textContent = today



// const formatdate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
// const lastupdate = document.getElementById("currentDate").textContent = formatdate