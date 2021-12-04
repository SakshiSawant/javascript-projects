let countDate = document.getElementById("countdown_timer_date")
let countHours = document.getElementById("countdown_timer_hours")
let countMinutes = document.getElementById("countdown_timer_minutes")
let countSeconds = document.getElementById("countdown_timer_seconds")

function countDown() {
    let countdown = 25
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentHour = currentDate.getHours()
    let currentMinute = currentDate.getMinutes()
    let currentSecond = currentDate.getSeconds()

    countDate.textContent = countdown - currentDay
    countHours.textContent = 24 - currentHour
    countMinutes.textContent = 60 - currentMinute
    countSeconds.textContent = 60 - currentSecond
}

countDown()

setTimeout(function () {
    location.reload()
},3000)

