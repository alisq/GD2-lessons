$(document).click(function(){
	$(".container").toggleClass("clicked")
})




$(document).scroll(function(){

	docHeight = $(document).height();
	winHeight = $(window).height();
	fromTop = $(document).scrollTop();

	scrollRatio = fromTop/(docHeight-winHeight)

	
	$(".pseudo-pic")
			.css({
				"opacity":scrollRatio,
				"transform":"rotate("+(720*scrollRatio)+"deg)"
			});



			if ((fromTop+(winHeight/2)) >  $(".hidden").offset().top ) {
				$(".hidden").css({"opacity":1})
			} else {
				$(".hidden").css({"opacity":0})
			}





	console.log(scrollRatio);

})