const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1]; //para obtener el ultimo elemento (img) (va cambiando)

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast); //pone al inicio del slider el ultimo elemento

function nextImg() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]; //para obtener el primer elemento (va cambiando)

  slider.style.marginLeft = "-200%"; //para que pase de img
  slider.style.transition = "all 0.5s";

  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst); //pone al final del slider el primer elemento
    slider.style.marginLeft = "-100%";
  }, 500);
}

function prevImg() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];

  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";

  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", function () {
  nextImg();
});

btnLeft.addEventListener("click", function () {
  prevImg();
});

setInterval(function () {
  nextImg();
}, 4000);

//interaccion iconos

const sliderIcon = document.querySelector("#cont-icon");
let sliderSectionIcon = document.querySelectorAll(".icn");
let sliderSectionLastIcon = sliderSectionIcon[sliderSectionIcon.length - 1];

const btnLeftIcon = document.querySelector("#btn-izq");
const btnRightIcon = document.querySelector("#btn-der");

// sliderIcon.insertAdjacentElement('afterbegin', sliderSectionLastIcon);

function nextIcn() {
  let sliderSectionFirstIcon = document.querySelectorAll(".icn")[0]; //para obtener el primer elemento (va cambiando)
  let sliderSectionFirstIcon2 = document.querySelectorAll(".icn")[1]; //para obtener el primer elemento (va cambiando)
  let sliderSectionFirstIcon3 = document.querySelectorAll(".icn")[2]; //para obtener el primer elemento (va cambiando)
  let sliderSectionLastIcon = sliderSectionIcon[sliderSectionIcon.length - 3];
  let sliderSectionLastIcon2 = sliderSectionIcon[sliderSectionIcon.length - 2];
  let sliderSectionLastIcon3 = sliderSectionIcon[sliderSectionIcon.length - 1];

  sliderSectionFirstIcon.style.display = "none";
  sliderSectionFirstIcon2.style.display = "none";
  sliderSectionFirstIcon3.style.display = "none";
  sliderSectionLastIcon.style.display = "block";
  sliderSectionLastIcon2.style.display = "block";
  sliderSectionLastIcon3.style.display = "block";
  sliderSectionLastIcon.style.marginLeft = "-5px";
  sliderIcon.style.transition = "all 0.7s";

  setTimeout(function () {
    sliderIcon.style.transition = "none";
  }, 700);

  console.log(sliderSectionFirstIcon);
}

function prevIcn() {
  let sliderSectionFirstIcon = document.querySelectorAll(".icn")[0]; //para obtener el primer elemento (va cambiando)
  let sliderSectionFirstIcon2 = document.querySelectorAll(".icn")[1]; //para obtener el primer elemento (va cambiando)
  let sliderSectionFirstIcon3 = document.querySelectorAll(".icn")[2]; //para obtener el primer elemento (va cambiando)
  let sliderSectionLastIcon = sliderSectionIcon[sliderSectionIcon.length - 3];
  let sliderSectionLastIcon2 = sliderSectionIcon[sliderSectionIcon.length - 2];
  let sliderSectionLastIcon3 = sliderSectionIcon[sliderSectionIcon.length - 1];

  sliderSectionFirstIcon.style.display = "block";
  sliderSectionFirstIcon2.style.display = "block";
  sliderSectionFirstIcon3.style.display = "block";
  sliderSectionLastIcon.style.display = "none";
  sliderSectionLastIcon2.style.display = "none";
  sliderSectionLastIcon3.style.display = "none";
  sliderSectionLastIcon.style.marginLeft = "10px";
  sliderIcon.style.transition = "all 0.7s";

  setTimeout(function () {
    sliderIcon.style.transition = "none";
  }, 700);
}

btnRightIcon.addEventListener("click", function () {
  nextIcn();
});

btnLeftIcon.addEventListener("click", function () {
  prevIcn();
});

