new Clipboard('.btn');

function slideIn(){
	setTimeout(function(){
	 $(".left-slider").addClass("slide-left");
	 $(".right-slider").addClass("slide-right");
	}, 100); 
	

	$(".left-slider-mesh").addClass("slide-left");
	$(".right-slider-mesh").addClass("slide-right");
}



function slideOut(){

	setTimeout(function(){
	 $(".left-slider-mesh").removeClass("slide-left");
	 $(".right-slider-mesh").removeClass("slide-right");
	}, 100); 

	$(".left-slider").removeClass("slide-left");
	$(".right-slider").removeClass("slide-right");
	
}

function bodyFade(){
	$( ".blackOut" ).animate({
	   opacity: .6
	 }, 500);
}


function bodyFadeOut(){
	$( ".blackOut" ).animate({
	   opacity: 0
	 }, 500);
}

function transition(){
	$("body").delegate("a","click",function(e){
		bodyFade();

		e.preventDefault();                             
		var url = this.href; 
		slideIn();

		setTimeout(function(){
		  $("#content").remove();
		  $('#container').load(url + ' #content');
		  setTimeout(function(){
		  	window.location = "#my-work";
		  	scrollReveal();
		  	slideOut();
		  	goFlickity();
		  	previousHover();
		  	bodyFadeOut();
		  	contactInit();
		    
		    hoverTime();
		    

		  }, 100); 
		}, 1000); 

		
	});
}

transition();

function borderFade(){
	$(window).scroll(function(){
	    $(".border").css("opacity", 1 - $(window).scrollTop() / 250);
	  });
}
borderFade();



function hoverTime(){
	$(".item-1 > .item-contents").hover(function(){
		$(".item-text-container1").toggleClass("text-stripe-bg")
		$(".text-name1").toggleClass("rhombus-slide");
		$(".top-bar1").toggleClass("top-slider");
		$(".bot-bar1").toggleClass("bot-slider");
	})

	$(".item-2 > .item-contents").hover(function(){
		$(".item-text-container2").toggleClass("text-stripe-bg")
		$(".text-name2").toggleClass("rhombus-slide");
		$(".top-bar2").toggleClass("top-slider");
		$(".bot-bar2").toggleClass("bot-slider");


	})

	$(".item-3 > .item-contents").hover(function(){
		$(".item-text-container3").toggleClass("text-stripe-bg")
		$(".text-name3").toggleClass("rhombus-slide");
		$(".top-bar3").toggleClass("top-slider");
		$(".bot-bar3").toggleClass("bot-slider");
	})

	$(".item-4 > .item-contents").hover(function(){
		$(".item-text-container4").toggleClass("text-stripe-bg")
		$(".text-name4").toggleClass("rhombus-slide");
		$(".top-bar4").toggleClass("top-slider");
		$(".bot-bar4").toggleClass("bot-slider");
	})

	$(".item-5 > .item-contents").hover(function(){
		$(".item-text-container5").toggleClass("text-stripe-bg")
		$(".text-name5").toggleClass("rhombus-slide");
		$(".top-bar5").toggleClass("top-slider");
		$(".bot-bar5").toggleClass("bot-slider");
	})

	$(".item-6 > .item-contents").hover(function(){
		$(".item-text-container6").toggleClass("text-stripe-bg")
		$(".text-name6").toggleClass("rhombus-slide");
		$(".top-bar6").toggleClass("top-slider");
		$(".bot-bar6").toggleClass("bot-slider");
	})

}

hoverTime();

function previousHover(){
	$(".prev").hover(function(){
		$(".item-left-tri,.item-left-tri-mesh").toggleClass("push-left");
		$(".prev").toggleClass("page-mover-flip-left");
	});
	
	$(".next2").hover(function(){
		$(".item-right-tri,.item-right-tri-mesh").toggleClass("push-right");
		$(".next2").toggleClass("page-mover-flip-right");
	});

}

previousHover();

function goFlickity(){
	$('.carousel').flickity({
	  // options
	  wrapAround: true,
	  imagesLoaded: true,
	  cellAlign: 'center',

	  contain: true
	});
}

goFlickity();


function contactInit(){
	$(".contact-mail").on("click",function(){
		$(".contact-rhombus").toggleClass("contact-rhombus-settle");
	});

	$(".contact-mail").hover(function(){
		$(".cls-3").toggleClass("svg-fill");
	});

	$(".contact-copy").on("click",function(){
		$(".contact-confirm").addClass("contact-confirm-slide");
		setTimeout(function(){
		$(".contact-confirm").removeClass("contact-confirm-slide");
		}, 3000);
	});
}

contactInit();


function scrollReveal(){

	$(document).scroll(function(){
		if ($('.item-1').visible(true)){
			$(".item-1").addClass("appear");
		}
		if ($('.item-2').visible(true)){
			$(".item-2").addClass("appear");
		}
		if ($('.item-3').visible(true)){
			$(".item-3").addClass("appear");
		}
		if ($('.item-4').visible(true)){
			$(".item-4").addClass("appear");
		}
		if ($('.item-5').visible(true)){
			$(".item-5").addClass("appear");
		}
		if ($('.item-6').visible(true)){
			$(".item-6").addClass("appear");
		}
		if ($('.contact-rhombus').visible(true)){
			setTimeout(function(){
				$(".contact-rhombus").addClass("contact-rhombus-slide");
			}, 500); 
		}
	});

}

scrollReveal();