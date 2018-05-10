function dias_restantes() {
	var today 		= new Date().getTime(),
	evento 			= new Date('2018-11-8').getTime(),
	restan 			= Math.ceil( Math.abs(evento-today)  / (1000 * 3600 * 24));

	$('span.bigger-font').html(restan);
};

$(document)
	.on( "mobileinit", function () {
		$.mobile.defaultPageTransition = 'flip';
		$.mobile.loadingMessage = "Cargando...";
		$.mobile.loadingMessageTextVisible = true;
		$.mobile.loadingMessageTheme = "b";
		$.mobile.pageLoadErrorMessage = "Disculpe, su solicitud no pudo ser procesada.";
		$.mobile.pageLoadErrorMessageTheme = "b";
	})
	.on( "pagechange", function () {

		var altohtml = $( 'html' ).css( 'height' );
		$( '.bg-white[role=main]' ).css( 'height', function() {	return	(parseInt(altohtml)-85) }); 
		dias_restantes();

		$('#conv-tex > a').on( 'click' , function(){
			var este 		= $(this),
				esteel		= este[0].childNodes[0],
				esteurl 	= esteel.src;

			$('#conv-tex > a').each( function( item ){
				var el		= $(this)[0].childNodes[0],
					url 	= el.src;

				if( url != esteurl && $(this).hasClass( 'active' ) ){
					$(this).removeClass( 'active' );
					el.src 		= url.substring( 0, url.search('-a.png') )+".png";
				}else if( url == esteurl && !este.hasClass( 'active' ) ){
					este.addClass( 'active' );
					esteel.src = esteurl.substring( 0, esteurl.search('.png') )+"-a.png";
				}
			});

			var envio = este[0].href.substring( este[0].href.search('ct') );

			$.ajax({
				url: '../js/json.php',
				success: function( respuesta ) {
					console.log( $.parseJSON(respuesta) );
				}

			})
		})
	})
	