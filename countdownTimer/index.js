let count_el = document.getElementById("countdown_timer");


let countdown = 25;

let currentDate = new Date()

let currentDay = currentDate.getDate()
console.log(currentDay)

count_el.textContent = countdown - currentDay
