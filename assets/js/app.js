$(function() {
	var sliderModule = (function() {
		var pb = {};
		pb.el = $('#slider');
		pb.items = {
			panel: pb.el.find('li')
	}

// variables necesarias
	var SliderInterval,
			currentSlider = 0,
			nextSlider = 1,
			lengthSlider = pb.items.panel.length;

//inicializando
	pb.init = function(settings) {
		this.settings = settings || {duration: 8000}
		var output = '';
}

 // activamos nuestro slider
SliderInit();

for (var i = 0; i < lengthSlider; i++){
	if (i == 0){
		output += '<li class="active"></li>';
	} else {
		output += '<li></li>';
	}
}

//funcion para controles slider
var changePanel = function(id) {
	clearInterval(SliderInterval);
	var panels = pb.items.panel,
	controls = $('#slider-controls li');
	// comprueba id 
	if (id >= lengthSlider) {
		id = 0;
	} else if (id < 0){
		id = lengthSlider-1;
	}

	controls.removeClass('active').eq(id).addClass('active');
	panels.eq(currentSlider).fadeOut('slow');
	panels.eq(id).fadeIn('slow');

	return pb;

}());
	sliderModule.init();
});













});