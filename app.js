$(document).ready(function() {
	//prompt('supply a number for fizzbuzz');
	var x = prompt('supply a number for fizz');
	var y = prompt('supply a number for buzz');
	validateInput(x, y);
	//showToPage(value);
	fizzBuzz(x, y);
		

	function fizzBuzz(fizzNumber, buzzNumber){
		for (i = 1; i <= 100; i++) {
			if (i % fizzNumber === 0 && i % buzzNumber === 0){
				showToPage('FizzBuzz');
			}else if (i % fizzNumber === 0){
				showToPage('Fizz');
			}else if (i % buzzNumber === 0){
				showToPage('Buzz');
			}else {
				showToPage(i);
			}
		}	
	}
	function validateInput(xString, yString){
		x = parseInt(xString);
		y = parseInt(yString);
		if (isNaN(x)){
			showToPage('Fizz is not a number');
		}
		if (isNaN(y)){
			showToPage('Buzz is not a number');
		}	
	}



	function showToPage(message) {
		$('body').append('<p>' + message + '</p>');
		
	}



	
});


