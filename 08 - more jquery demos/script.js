$(document).click(function(){
	//$(".container").toggleClass("clicked")
	$(document).scrollTo(".hidden",2000);
})



	docHeight = $(document).height();
	winHeight = $(window).height();

$(document).scroll(function(){

	fromTop = $(document).scrollTop();

	scrollRatio = fromTop/(docHeight-winHeight);

	//CHECK THIS CODE OUT SHERYSSE!
	if ((fromTop+(winHeight/2)) >  $(".hidden").offset().top ) {
		$(".hidden").css({"opacity":1})
	} else {
		$(".hidden").css({"opacity":0})
	}


	//LOOK AT THIS TO DO IT FOR A BUNCH OF DIFFERENT ELEMENTS!
	 $("p").each(function(){
		if ((fromTop+(winHeight/2)) >  $(this).offset().top ) {
			$(this).css({"opacity":1})
		} else {
			$(this).css({"opacity":0})
		}
	 })

	
	$(".pseudo-pic")
			.css({
				"opacity":scrollRatio,
				"transform":"rotate("+(720*scrollRatio)+"deg)"
			});



			



//	console.log(scrollRatio);

})