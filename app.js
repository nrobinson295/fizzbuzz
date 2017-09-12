$(document).ready(function() {
	function showToPage(message) {
		$('body').append('<p>' + message + '</p>');
	}


	for (i = 1; i <= 100; i++) {

		if (i % 3 === 0 && i % 5 === 0){
			showToPage('FizzBuzz');
		}else if (i % 3 === 0){
			showToPage('Fizz');
		}else if (i % 5 === 0){
			showToPage('Buzz');
		}else {
			showToPage(i);
		}
	}
});


