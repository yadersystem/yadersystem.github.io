/*=========================================================================
			Yo trabajando el Mio Mas Nada
=========================================================================*/
	$(function(){
		$("#yo-image").owlCarousel({
			items:1,
			autoplay:true,
			smartSpeed:800,
			loop: true,
			autoplayHoverPause:true
		});
	});

/*=========================================================================
			Contador de Porcentaje
=========================================================================*/
	$(function(){
	 	$('.counter').counterUp({
        	delay: 10,
        	time: 1000
    	});
	});

		progreso=0;progreso1=0;progreso2=0;progreso3=0;progreso4=0;progreso5=0;
		progreso6=0;progreso7=0;progreso8=0;progreso9=0;progreso10=0;progreso11=0;
		progreso12=0;progreso13=0;progreso14=0;progreso15=0;progreso16=0;
		
		var idIterval = setInterval(function(){
		  progreso +=1;
		  $('#html').css('width', progreso + '%');
		  if(progreso == 100){
		    clearInterval(idIterval);
			  }
			},10);

		var idIterval1 = setInterval(function(){
		  progreso1 +=1;
		  $('#css').css('width', progreso1 + '%');
		  if(progreso1 == 100){
		    clearInterval(idIterval1);
			  }
			},10);
		
		var idIterval2 = setInterval(function(){
		  progreso2 +=1;
		  $('#javascript').css('width', progreso2 + '%');
		  if(progreso2 == 70){
		    clearInterval(idIterval2);
			  }
			},10);

		var idIterval3 = setInterval(function(){
		  progreso3 +=1;
		  $('#bootstrap').css('width', progreso3 + '%');
		  if(progreso3 == 90){
		    clearInterval(idIterval3);
			  }
			},10);

		var idIterval4 = setInterval(function(){
		  progreso4 +=1;
		  $('#php').css('width', progreso4 + '%');
		  if(progreso4 == 98){
		    clearInterval(idIterval4);
			  }
			},10);

		var idIterval5 = setInterval(function(){
		  progreso5 +=1;
		  $('#java').css('width', progreso5 + '%');
		  if(progreso5 == 60){
		    clearInterval(idIterval5);
			  }
			},10);

		var idIterval6 = setInterval(function(){
		  progreso6 +=1;
		  $('#c').css('width', progreso6 + '%');
		  if(progreso6 == 20){
		    clearInterval(idIterval6);
			  }
			},10);

		var idIterval7 = setInterval(function(){
		  progreso7 +=1;
		  $('#mysql').css('width', progreso7 + '%');
		  if(progreso7 == 50){
		    clearInterval(idIterval7);
			  }
			},10);

		var idIterval8 = setInterval(function(){
		  progreso8 +=1;
		  $('#postgres').css('width', progreso8 + '%');
		  if(progreso8 == 40){
		    clearInterval(idIterval8);
			  }
			},10);

		var idIterval9 = setInterval(function(){
		  progreso9 +=1;
		  $('#angular').css('width', progreso9 + '%');
		  if(progreso9 == 40){
		    clearInterval(idIterval9);
			  }
			},10);

		var idIterval10 = setInterval(function(){
		  progreso10 +=1;
		  $('#laravel').css('width', progreso10 + '%');
		  if(progreso10 == 35){
		    clearInterval(idIterval10);
			  }
			},10);

		var idIterval17 = setInterval(function(){
		  progreso17 +=1;
		  $('#mdb').css('width', progreso17 + '%');
		  if(progreso17 == 50){
		    clearInterval(idIterval17);
			  }
			},10);

		var idIterval11 = setInterval(function(){
		  progreso11 +=1;
		  $('#git').css('width', progreso11 + '%');
		  if(progreso11 == 100){
		    clearInterval(idIterval11);
			  }
			},10);

		var idIterval12 = setInterval(function(){
		  progreso12 +=1;
		  $('#bm').css('width', progreso12 + '%');
		  if(progreso12 == 100){
		    clearInterval(idIterval12);
			  }
			},10);

		var idIterval13 = setInterval(function(){
		  progreso13 +=1;
		  $('#pf').css('width', progreso13 + '%');
		  if(progreso13 == 100){
		    clearInterval(idIterval13);
			  }
			},10);

		var idIterval14 = setInterval(function(){
		  progreso14 +=1;
		  $('#pf').css('width', progreso14 + '%');
		  if(progreso14 == 100){
		    clearInterval(idIterval14);
			  }
			},10);

		var idIterval15 = setInterval(function(){
		  progreso15 +=1;
		  $('#xs').css('width', progreso15 + '%');
		  if(progreso15 == 100){
		    clearInterval(idIterval15);
			  }
			},10);

		var idIterval16 = setInterval(function(){
		  progreso16 +=1;
		  $('#xc').css('width', progreso16 + '%');
		  if(progreso16 == 100){
		    clearInterval(idIterval16);
			  }
			},10);

/*=========================================================================
								SERVICIOS
=========================================================================*/

	$(function(){
		// Animacion en Scrooll
		new WOW().init();
	}); 

/*=========================================================================
								PORTAFOLIO
=========================================================================*/	
	$(function(){
		$("#work").magnificPopup({
			delegate: 'a',
	  		type: 'image',
		  	gallery:{
		    	enabled:true
		  	}
		});
	});

/*=========================================================================
								NAVIGATION
=========================================================================*/
//Show // hide transparent black navegation
$(function(){

	$(window).scroll(function(){
		if($(this).scrollTop()<50){
			//desaparece
			$("nav").removeClass("vesco-top-nav");
			$("#back-to-top").fadeOut();
		}else{
			// se muestra el menu
			$("nav").addClass("vesco-top-nav");
			$("#back-to-top").fadeIn();
		}
	});

});
//Smooth scrolling
$(function(){

	$("a.smooth-scroll").click(function(event){
		event.preventDefault();
		//get / return id like #about, #work, #team etc...

		var section=$(this).attr("href");

		$('html,body').animate({
			scrollTop:$(section).offset().top - 64
		},1250, "easeInOutExpo");
	});
});


$(function(){
	$(".navbar-collapse ul li a").on("click touch",function(){
		$(".navbar-toggle").click();
	
	});
});