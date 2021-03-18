// tady je místo pro náš program


let text = document.querySelector(".veta");



function ztucni() {
  text.classList.toggle("tucne");
}

function odtucni() {
    text.classList.toggle("normal");
  }


function cerveny() {
  text.classList.toggle("red");
}


let aktualniVelikost = 16;
text.style.fontSize = aktualniVelikost + "px";

function zvetsi() {
  ++aktualniVelikost;
  text.style.fontSize = aktualniVelikost + "px";
}



function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}



function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}



function mute() {
  let zvuk = document.querySelector("#zvuk");
  zvuk.volume = 0;
}



function stredni() {
  let zvuk = document.querySelector("#zvuk");
  zvuk.volume = 0.5;
}



function zesil() {
  let zvuk = document.querySelector("#zvuk");
  zvuk.volume = 1;
}



function zacatek() {
  let zvuk = document.querySelector("#zvuk");
  zvuk.currentTime = 0;
}