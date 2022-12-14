
let currentDate = document.lastModified;
document.querySelector('#lastModified').textContent = currentDate;


let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyrightYear').innerHTML = year;


const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;
