const menu = document.getElementById("menu")
const btn = document.getElementById("menubtn")
const icon = document.getElementById("icon")

const showMenu = () => {
    menu.classList.toggle("show");
    icon.classList.toggle("bi-list");
    icon.classList.toggle("bi-x-circle")
}
btn.addEventListener("click", showMenu)
