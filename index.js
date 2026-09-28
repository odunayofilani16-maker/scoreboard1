const scoreHome = document.getElementById("score-home");
const scoreGuest = document.getElementById("score-guest");
const homeAdd1 = document.getElementById("home1");
const homeAdd2 = document.getElementById("home2");
const homeAdd3 = document.getElementById("home3");
const guestAdd1 = document.getElementById("guest1");
const guestAdd2 = document.getElementById("guest2");
const guestAdd3 = document.getElementById("guest3");
const newGame = document.getElementById("ng")
let homeScore = 0;
let guestScore = 0;

homeAdd1.onclick = function (){
    homeScore+=1
    scoreHome.textContent = homeScore;
}

homeAdd2.onclick = function (){
    homeScore+=2
    scoreHome.textContent = homeScore;
}

homeAdd3.onclick = function (){
    homeScore+=3
    scoreHome.textContent = homeScore;
}

guestAdd1.onclick = function (){
    guestScore+=1
    scoreGuest.textContent = guestScore;
}

guestAdd2.onclick = function (){
    guestScore+=2
    scoreGuest.textContent = guestScore;
}

guestAdd3.onclick = function (){
    guestScore+=3
    scoreGuest.textContent = guestScore;
}

newGame.onclick = function (){
    homeScore = 0
    guestScore = 0
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
}