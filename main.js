$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

});

$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});

	});

});


$( function(){
    var arrImagenes = [ 'fo.jpg','fo2.jpg', 'fo3.jpg', 'fo4.jpg' ];
    var imagenActual = 'fo.jpg';
    var tiempo = 30;
    var id_contenedor = 'main-wrap'
    setInterval( function(){
        do{
            var randImage = arrImagenes[Math.ceil(Math.random()*(arrImagenes.length-1))];
        }while( randImage == imagenActual )
        imagenActual = randImage;
        cambiarImagenFondo(imagenActual, id_contenedor);
    }, tiempo)
})
 
function cambiarImagenFondo(nuevaImagen, contenedor){
    var contenedor = $('#' + contenedor);
    //cargar imagen primero
    var tempImagen = new Image();
    $(tempImagen).load( function(){
        contenedor.css('backgroundImage', 'url('+tempImagen.src+')');
    });
    tempImagen.src = 'images/' + nuevaImagen;
}