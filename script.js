const nav = document.querySelector(".side-bar")
const burger = document.querySelector(".bx-menu")
const ex = document.querySelector(".bx-x")

function controler(){
    nav.classList.add("click")
    nav.classList.remove("notclick")
}

function notcontroler(){
    nav.classList.add("notclick")
    nav.classList.toggle("click")
}

