$(function() {
	var	mainpic01 = $('#slider1');
	var mainpic02 = $('#slider2');
	var mainpic03 = $('#slider3');
	var mainpic04 = $('#slider4');
	var mainpic05 = $('#slider5');

	var slide_num = 5;
	var fadeSpeed = 2000;
	var countspeed = 3000;
	var countspeed2 = fadeSpeed - 100;

	function init() {
		mainpic01.hide().stop();
		mainpic02.hide().stop();
		mainpic03.hide().stop();
		mainpic04.hide().stop();
		mainpic05.hide().stop();
	}
})