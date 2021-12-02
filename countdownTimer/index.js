let countDate = document.getElementById("countdown_timer_date")
let countHours = document.getElementById("countdown_timer_hours")
let countMinutes = document.getElementById("countdown_timer_minutes")


let countdown = 25
let currentDate = new Date()
let currentDay = currentDate.getDate()
let currentHour = currentDate.getHours()
let currentMinute = currentDate.getMinutes()

countDate.textContent = countdown - currentDay
countHours.textContent = 24 - currentHour
countMinutes.textContent = 60 - currentMinute