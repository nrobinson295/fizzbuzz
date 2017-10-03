$(document).ready(function() {
	prompt('supply a number for fizzbuzz');



	function showToPage(message) {
		$('body').append('<p>' + message + '</p>');
		
	}



	for (i = 1; i <= 100; i++) {
		showToPage(i);
		
	}
});


