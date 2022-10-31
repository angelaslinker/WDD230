// const d = new Date();
// currentDate = d.getDay();

// if(currentDate == 1 || currentDate == 2){
//     document.querySelector('#meeting') ="block" ;
// } else{
//     document.querySelector('#meeting').style.display="none";
// }

let date = new Date();

document.getElementById("currentYear").innerHTML = date.getFullYear()

document.getElementById("lastUpdated").innerHTML = document.lastModified