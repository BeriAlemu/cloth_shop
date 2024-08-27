const nav = document.querySelector(".side-bar")
const card1 = document.querySelector(".cards-one")
const card2 = document.querySelector(".cards-two")
const card3 = document.querySelector(".cards-three")
const card4 = document.querySelector(".cards-four")
const filter1 = document.querySelector(".filter-1")
const filter2 = document.querySelector(".filter-2")
const filter3 = document.querySelector(".filter-3")
const filter4 = document.querySelector(".filter-4")
const filter5 = document.querySelector(".filter-5")
const filter6 = document.querySelector(".filter-6")
const filter7 = document.querySelector(".filter-7")
const filter8 = document.querySelector(".filter-8")


function controler(){
    nav.classList.add("click")
    nav.classList.remove("notclick")
}

function notcontroler(){
    nav.classList.add("notclick")
    nav.classList.toggle("click")
}


function background_one(){
    filter1.classList.add("black")
    filter2.classList.remove("black")
    filter3.classList.remove("black")
    filter4.classList.remove("black")
}

function background_two(){
    filter1.classList.remove("black")
    filter2.classList.add("black")
    filter3.classList.remove("black")
    filter4.classList.remove("black")
}

function background_three(){
    filter1.classList.remove("black")
    filter2.classList.remove("black")
    filter3.classList.add("black")
    filter4.classList.remove("black")
}

function background_four(){
    filter1.classList.remove("black")
    filter2.classList.remove("black")
    filter3.classList.remove("black")
    filter4.classList.add("black")
}

function background_five(){
    filter5.classList.add("black")
    filter6.classList.remove("black")
    filter7.classList.remove("black")
    filter8.classList.remove("black")
}
function background_six(){
    filter5.classList.remove("black")
    filter6.classList.add("black")
    filter7.classList.remove("black")
    filter8.classList.remove("black")
}
function background_seven(){
    filter5.classList.remove("black")
    filter6.classList.remove("black")
    filter7.classList.add("black")
    filter8.classList.remove("black")
}
function background_eight(){
    filter5.classList.remove("black")
    filter6.classList.remove("black")
    filter7.classList.remove("black")
    filter8.classList.add("black")
}


function remove1(){
    card1.classList.remove("remove")
    card2.classList.add("remove")
    card3.classList.add("remove")
    card4.classList.add("remove")
}

function remove2(){
    card1.classList.add("remove")
    card2.classList.remove("remove")
    card3.classList.add("remove")
    card4.classList.add("remove")
}

function remove3(){
    card1.classList.add("remove")
    card2.classList.add("remove")
    card3.classList.remove("remove")
    card4.classList.add("remove")
}

function remove4(){
    card1.classList.add("remove")
    card2.classList.add("remove")
    card3.classList.add("remove")
    card4.classList.remove("remove")
}

