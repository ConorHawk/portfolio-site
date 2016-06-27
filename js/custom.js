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
		  	previousHover();
		  	bodyFadeOut();
		  	window.location = "#my-work";
		    slideOut();
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
	$(".next").hover(function(){
		$(".item-right-tri,.item-right-tri-mesh").toggleClass("push-right");
		$(".next").toggleClass("page-mover-flip");
	});
}

previousHover();






// $(document).on("click",function(){

// 	setTimeout(function(){
// 	  $(".left-slider").toggleClass("slide-left");
// 	  $(".right-slider").toggleClass("slide-right");
// 	}, 100);    		
// 	$(".left-slider-mesh").toggleClass("slide-left");
// 	$(".right-slider-mesh").toggleClass("slide-right");
// });

// $(document).on("click",function(){
// 	slideIn();
// 	setTimeout(function(){
// 	  slideOut()
// 	}, 1000); 

// });

