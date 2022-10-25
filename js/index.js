const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1]; //para obtener el ultimo elemento (img) (va cambiando)
// let cajaContenido = document.querySelectorAll(".caja-cont-img");

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //pone al inicio del slider el ultimo elemento

function nextImg(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]; //para obtener el primer elemento (va cambiando)

    slider.style.marginLeft = "-200%";  //para que pase de img
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst); //pone al final del slider el primer elemento
        slider.style.marginLeft = "-100%";
        // slider.insertAdjacentElement('beforeend', cajaContenido);
    }, 500);
}

function prevImg(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = "0";  
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    nextImg();
});

btnLeft.addEventListener('click', function(){
    prevImg();
});

// setInterval(function(){
//     nextImg();
// }, 4000);