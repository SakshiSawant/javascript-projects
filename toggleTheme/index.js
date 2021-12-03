let headingTitle = document.getElementById("title")

let container = document.getElementById("title_container")

headingTitle.textContent = "Hello"

let lightMode = document.getElementById("light")
let darkMode = document.getElementById("dark")

lightMode.addEventListener("click", light)
darkMode.addEventListener("click", dark)

function light()
{
    container.style.backgroundColor = "#ffffff";
}

function dark()
{
    container.style.backgroundColor = "#000000";
    headingTitle.style.color = "#ffffff";
}