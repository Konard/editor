//
// main.js
//

function init() {
	var initText = localStorage['text'];
	$('textarea').text(initText);
	$('.panel').hide();
}
function update() {
	var newText = $('textarea').val();
	localStorage['text'] = newText;
}
$(document).ready(init);
$('.settings').click(function() {
	$('.panel').slideToggle(300);
});
$('.t-default').click(function() {
	$('.style').attr('href', 'assets/t-default.css');
});
$('.t-code').click(function() {
	$('.style').attr('href', 'assets/t-code.css');
});
$('.t-writer').click(function() {
	$('.style').attr('href', 'assets/t-writer.css');
});