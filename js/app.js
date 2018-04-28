function dias_restantes() {
	var today 		= new Date().getTime(),
	evento 			= new Date('2018-11-8').getTime(),
	restan 			= Math.ceil( Math.abs(evento-today)  / (1000 * 3600 * 24));

	$('span.bigger-font').html(restan);
};

$(document)
	.on( "mobileinit", function () {
		 $.mobile.defaultPageTransition = 'flip';
	})
	.on( "pagechange", function () {
		dias_restantes();
		$( "body>[data-role='panel']" ).panel();
		
	})