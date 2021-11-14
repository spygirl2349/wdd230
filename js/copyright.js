const copyright = document.getElementById("copyright").textContent = new Date().getFullYear()

// const date = new Date()
// const updateDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
// const time = date.getTime()
// const lastupdate = document.getElementById("updated").textContent = updateDate + ' ' + time

let date = new Date(document.lastModified)
let formatdate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
let lastupdate = document.getElementById("updated").textContent = formatdate