var playeraB = document.getElementById("color1");
var playeraA = document.getElementById("color2");
var imgPlayera = document.getElementById("playera");
var imgCarrera = document.getElementById("carrera");
var avatar1 = document.getElementById("avatar1");
var avatar2 = document.getElementById("avatar2");
var envio1 = document.getElementById("enviar1");
var carrusel = document.getElementById("carrusel");
const selectElement = document.getElementById('opciones');


playeraB.onclick = function(){
	imgPlayera.src = "img/playera/playera_blanca.png";
}

playeraA.onclick = function(){
	imgPlayera.src = "img/playera/playera_azul.png";
}

selectElement.addEventListener('change', () =>{
	let valorSeleccionado = selectElement.value;
	console.log(valorSeleccionado);

	switch(valorSeleccionado){
		case "0":
			imgCarrera.src = "";
			break;
		case "1":
			imgCarrera.src = "img/carreras/IME.png";
			break;
		case "2":
			imgCarrera.src = "img/carreras/ING-Industrial.png";
			break;
		case "3":
			imgCarrera.src = "img/carreras/ITSE.png";
			break;
		case "4":
			imgCarrera.src = "img/carreras/tecnologia.png";
			break;
		case "5":
			imgCarrera.src = "img/carreras/MVZ.png";
			break;
		case "6":
			imgCarrera.src = "img/carreras/agricola.png";
			break;
		case "7":
			imgCarrera.src = "img/carreras/admin.png";
			break;
		case "8":
			imgCarrera.src = "img/carreras/conta.png";
			break;
		case "9":
			imgCarrera.src = "img/carreras/informatica.png";
			break;
	}
});

//Ocultar-Mostrar avatar

avatar1.onclick = function(){
	envio1.classList.add("d-none");
	carrusel.classList.remove("d-none");
}

avatar2.onclick = function(){
	carrusel.classList.add("d-none");
	envio1.classList.remove("d-none");
	cabezaimg.src = "";
	petoimg.src = "";
	pantalonimg.src = "";
}

//Mostrar pre avatar

var myCarousel = document.getElementById('carr');
var myCarousel2 = document.getElementById('carrt');
var myCarousel3 = document.getElementById('carrp');
var btnP = document.getElementById("btnPre");

var cabezaimg = document.getElementById("preCabeza");
var petoimg = document.getElementById("prePeto");
var pantalonimg = document.getElementById("prePantalon");

/*myCarousel.addEventListener('slid.bs.carousel', function () {
    var activeItem = myCarousel.querySelector('.carousel-item.active');
    var currentImage = activeItem.querySelector('img');
    var imageUrl = currentImage.getAttribute('value');
    
    // Realizar la acción deseada con el valor obtenido
    console.log('La imagen actual es:', imageUrl);
    
  });*/

btnP.addEventListener('click', function() {
   var activeItem = myCarousel.querySelector('.carousel-item.active');
   var currentImage = activeItem.querySelector('img');
   var imageCab = currentImage.getAttribute('value');

   var activeItem2 = myCarousel2.querySelector('.carousel-item.active');
   var currentImage2 = activeItem2.querySelector('img');
   var imageCab2 = currentImage2.getAttribute('value');

   var activeItem3 = myCarousel3.querySelector('.carousel-item.active');
   var currentImage3 = activeItem3.querySelector('img');
   var imageCab3 = currentImage3.getAttribute('value');

   switch(imageCab){
   	case "1":
		cabezaimg.src = "img/pre/cab1.png";
		break;
	case "2":
		cabezaimg.src = "img/pre/cab2.png";
		break;
	case "3":
		cabezaimg.src = "img/pre/cab3.png";
		break;
	case "4":
		cabezaimg.src = "img/pre/cab4.png";
		break;
	default:
		cabezaimg.src = "img/pre/cab1.png";
   }

   switch(imageCab2){
   	case "1":
		petoimg.src = "img/pre/pet1.png";
		break;
	case "2":
		petoimg.src = "img/pre/pet2.png";
		break;
	case "3":
		petoimg.src = "img/pre/pet3.png";
		break;
	case "4":
		petoimg.src = "img/pre/pet4.png";
		break;
	default:
		petoimg.src = "img/pre/pet1.png";
   }

   switch(imageCab3){
   	case "1":
		pantalonimg.src = "img/pre/pan1.png";
		break;
	case "2":
		pantalonimg.src = "img/pre/pan2.png";
		break;
	case "3":
		pantalonimg.src = "img/pre/pan3.png";
		break;
	default:
		cabezaimg.src = "img/pre/pan1.png";
   }
});
