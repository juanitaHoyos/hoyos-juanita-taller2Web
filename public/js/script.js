/*var fondos;
var tam;

window.onload() = function (){
    fondos = document.getElementsByClassName("elemento-parallax");
    tam = fondos.length;
    window.addEventListener("scroll",parallax());
};


function parallax(){
    for(var i = 0; i < tam; i++){
        
    }
}*/

var slider = document.getElementById("slide");
var output = document.getElementById("dias");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//libs
var swiper = new Swiper('.swiperDestino', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});