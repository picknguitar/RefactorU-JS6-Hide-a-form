$(document).ready(function() {

	$('input').click(function(e) {
		e.preventDefault();
		$('<div>').append('#sub-btn');                    //e.preventDefault prevents the link from taking you to the page
	});

	$('#update-btn').on('click', function() {
		$('#form').css('display','block');
	});

	$(function(){
  		$('.name-text').keyup(function() {
 			$('.pro-name').text($(this).val());
 			$('.user-name').text($(this).val());
  		});
	});

	$(function(){
  		$('.bio-text').keyup(function() {
 			$('.pro-bio').text($(this).val());
 			$('p').css('margin', '0 20 0 35');
  		});
	});

	// $(function(){
 //  		$('.book-text').keyup(function() {			----Change list of books independently----
 // 			$('.pro-name').text($(this).val());
 //  		});
	// });

	// $(function(){
 //  		$('.js-text').keyup(function() {			----Change list of js libraries----
 // 			$('.pro-name').text($(this).val());
 //  		});
	// });

	$('#sub-btn').on('click', function() {
		$('#form').css('display','none');
	});

});


