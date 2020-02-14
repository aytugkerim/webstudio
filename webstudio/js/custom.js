$(document).ready(function(){
	var sliderAyar = {
		speed: 1000,
		pager: false
	}
	$("#slider ul").bxSlider(sliderAyar);

	var kapat = function(){
		for (var i = 1; i <= 8; i++) {
			$("#r"+i).hide();
			$("#b"+i).removeClass("active");
		}		
	}


	$('#b1').click(function() {
		kapat();
		$("#r1").fadeIn();
		$("#b1").addClass("active");
		return false;
	});

	$('#b2').click(function() {
		kapat();
		$("#r2").fadeIn();
		$("#b2").addClass("active");
		return false;
	});

	$('#b3').click(function() {
		kapat();
		$("#r3").fadeIn();
		$("#b3").addClass("active");
		return false;
	});

	$('#b4').click(function() {
		kapat();
		$("#r4").fadeIn();
		$("#b4").addClass("active");
		return false;
	});

	$('#b5').click(function() {
		kapat();
		$("#r5").fadeIn();
		$("#b5").addClass("active");
		return false;
	});

	$('#b6').click(function() {
		kapat();
		$("#r6").fadeIn();
		$("#b6").addClass("active");
		return false;
	});

	$('#b7').click(function() {
		kapat();
		$("#r7").fadeIn();
		$("#b7").addClass("active");
		return false;
	});

	$('#b8').click(function() {
		kapat();
		$("#r8").fadeIn();
		$("#b8").addClass("active");
		return false;
	});


});