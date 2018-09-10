// Variables
var zoom = 100;

// Image Classes
var intro_filter = document.getElementsByClassName('intro_filter')[0];
var u_filter = document.getElementsByClassName('u_filter')[0];
var g_filter = document.getElementsByClassName('g_filter')[0];
var r_filter = document.getElementsByClassName('r_filter')[0];
var i_filter = document.getElementsByClassName('i_filter')[0];
var z_filter = document.getElementsByClassName('z_filter')[0];
var y_filter = document.getElementsByClassName('y_filter')[0];
// RGB
var red_filter = document.getElementsByClassName('red_filter')[0];
var green_filter = document.getElementsByClassName('green_filter')[0];
var blue_filter = document.getElementsByClassName('blue_filter')[0];

// Slider Values 
var u_value = document.getElementById('u_value');
var g_value = document.getElementById('g_value');
var r_value = document.getElementById('r_value');
var i_value = document.getElementById('i_value');
var z_value = document.getElementById('z_value');
var y_value = document.getElementById('y_value');
// RGB
var red_value = document.getElementById('red_value');
var green_value = document.getElementById('green_value');
var blue_value = document.getElementById('blue_value');


// Checkbox variables

var u_checkbox = document.getElementById('u_checkbox');
var g_checkbox = document.getElementById('g_checkbox');
var r_checkbox = document.getElementById('r_checkbox');
var i_checkbox = document.getElementById('i_checkbox');
var z_checkbox = document.getElementById('z_checkbox');
var y_checkbox = document.getElementById('y_checkbox');
// RGB
var red_checkbox = document.getElementById('red_checkbox');
var green_checkbox = document.getElementById('green_checkbox');
var blue_checkbox = document.getElementById('blue_checkbox');

// Select Variables
var u_select = document.getElementById('u_select');
var g_select = document.getElementById('g_select');
var r_select = document.getElementById('r_select');
var i_select = document.getElementById('i_select');
var z_select = document.getElementById('z_select');
var y_select = document.getElementById('y_select');
// RGB
var red_select = document.getElementById('red_select');
var green_select = document.getElementById('green_select');
var blue_select = document.getElementById('blue_select');

// Turns the Filters on and off if you click the checkbox.
function check() {
	
	// var inputs = document.querySelectorAll("input[type='checkbox']");
	if (u_checkbox.checked == true || g_checkbox.checked == true || r_checkbox.checked == true || i_checkbox.checked == true || z_checkbox.checked == true || y_checkbox.checked == true || red_checkbox.checked == true || green_checkbox.checked == true || blue_checkbox.checked == true) {
		intro_filter.style.display = 'none'
	} else {
		intro_filter.style.display = 'block'
	}


	// U
	if (u_checkbox.checked == true) {
		u_filter.style.display = 'block';	
	}
	else {
		u_filter.style.display = 'none';
		
	}

	// G
	if (g_checkbox.checked == true) {
		g_filter.style.display = 'block';	
	}
	else {
		g_filter.style.display = 'none';
		
	}
	// R
	if (r_checkbox.checked == true) {
		r_filter.style.display = 'block';	
	}
	else {
		r_filter.style.display = 'none';
		
	}

		// I
	if (i_checkbox.checked == true) {
		i_filter.style.display = 'block';	
	}
	else {
		i_filter.style.display = 'none';
		
	}

		// Z
	if (z_checkbox.checked == true) {
		z_filter.style.display = 'block';	
	}
	else {
		z_filter.style.display = 'none';
		
	}

		// Y
	if (y_checkbox.checked == true) {
		y_filter.style.display = 'block';	
	}
	else {
		y_filter.style.display = 'none';
		
	}

	// Red
	if (red_checkbox.checked == true) {
		red_filter.style.display = 'block';	
	}
	else {
		red_filter.style.display = 'none';
		
	}

	// Green
	if (green_checkbox.checked == true) {
		green_filter.style.display = 'block';	
	}
	else {
		green_filter.style.display = 'none';
		
	}

	// Blue
	if (blue_checkbox.checked == true) {
		blue_filter.style.display = 'block';	
	}
	else {
		blue_filter.style.display = 'none';
		
	}
	

	
}


// Resets images to a default
function reset() {
	u_filter.setAttribute("style", "-webkit-filter: brightness(1.92);display:block;background-color:#A649EC");
	g_filter.setAttribute("style", "-webkit-filter: brightness(1.08);display:block;background-color:#3933FF");
	r_filter.setAttribute("style", "-webkit-filter: brightness(1.45);display:block;background-color:#6FD898");
	i_filter.setAttribute("style", "-webkit-filter: brightness(.52);display:block;background-color:#E9DE20");
	z_filter.setAttribute("style", "-webkit-filter: brightness(.375);display:block;background-color:#E39F62");
	y_filter.setAttribute("style", "-webkit-filter: saturate(1.9);display:block;background-color:#D73131");
	// RGB
	red_filter.setAttribute("style", "-webkit-filter: saturate(1.9);display:block;background-color:#D73131");
	green_filter.setAttribute("style", "-webkit-filter: saturate(1.9);display:block;background-color:#6FD898");
	blue_filter.setAttribute("style", "-webkit-filter: saturate(1.9);display:block;background-color:#3933FF");

		if (u_checkbox.checked != true) {
			u_checkbox.click();
		}
		if (g_checkbox.checked != true) {
			g_checkbox.click();
		}
		if (r_checkbox.checked != true) {
			r_checkbox.click();
		}
		if (i_checkbox.checked != true) {
			i_checkbox.click();
		}
		if (z_checkbox.checked != true) {
			z_checkbox.click();
		}
		if (y_checkbox.checked != true) {
			y_checkbox.click();
		}
		if (red_checkbox.checked != true) {
			red_checkbox.click();
		}		
		if (green_checkbox.checked != true) {
			green_checkbox.click();
		}
		if (blue_checkbox.checked != true) {
			blue_checkbox.click();
		}		
}

	
// Update image values on slider change 
u_value.addEventListener('change', function() {
	u_filter.style.WebkitFilter = 'saturate('+ this.value +')'; 
	u_filter.style.WebkitFilter = 'brightness('+ this.value*1.2 +')'; 

	
});

g_value.addEventListener('change', function() {
	g_filter.style.WebkitFilter = 'saturate('+ this.value +')'; 
	g_filter.style.WebkitFilter = 'brightness('+ this.value/2.5 +')'; 
});

r_value.addEventListener('change', function() {
	r_filter.style.WebkitFilter = 'saturate('+ this.value +')'; 
	r_filter.style.WebkitFilter = 'brightness('+ this.value/7 +')'; 
});

i_value.addEventListener('change', function() {
	i_filter.style.WebkitFilter = 'saturate('+ this.value +')'; 
	i_filter.style.WebkitFilter = 'brightness('+ this.value/18 +')'; 
});

z_value.addEventListener('change', function() {
	z_filter.style.WebkitFilter = 'saturate('+ this.value +')'; 
	z_filter.style.WebkitFilter = 'brightness('+ this.value/16 +')'; 
});

y_value.addEventListener('change', function() {
	y_filter.style.WebkitFilter = 'brightness('+ this.value/6 +')'; 
});

// RGB

red_value.addEventListener('change', function() {
	red_filter.style.WebkitFilter = 'brightness('+ this.value/6 +')'; 
});

green_value.addEventListener('change', function() {
	green_filter.style.WebkitFilter = 'brightness('+ this.value/6 +')'; 
});

blue_value.addEventListener('change', function() {
	blue_filter.style.WebkitFilter = 'brightness('+ this.value/6 +')'; 
});


// Color Picker

function color_picker() {

	// U
	if (u_select.value == 'violet') {
		u_filter.style.backgroundColor = '#A649EC';
	}
	if (u_select.value == 'blue') {
		u_filter.style.backgroundColor = '#3933FF';
	}
	if (u_select.value == 'green') {
		u_filter.style.backgroundColor = '#6FD898';
	}
	if (u_select.value == 'yellow') {
		u_filter.style.backgroundColor = '#E9DE20';
	}
	if (u_select.value == 'orange') {
		u_filter.style.backgroundColor = '#E39F62';
	}
	if (u_select.value == 'red') {
		u_filter.style.backgroundColor = '#D73131';
	}
	if (u_select.value == 'none') {
		u_filter.style.backgroundColor = 'transparent';
	}

	// G
	if (g_select.value == 'violet') {
		g_filter.style.backgroundColor = '#A649EC';
	}
	if (g_select.value == 'blue') {
		g_filter.style.backgroundColor = '#3933FF';
	}
	if (g_select.value == 'green') {
		g_filter.style.backgroundColor = '#6FD898';
	}
	if (g_select.value == 'yellow') {
		g_filter.style.backgroundColor = '#E9DE20';
	}
	if (g_select.value == 'orange') {
		g_filter.style.backgroundColor = '#E39F62';
	}
	if (g_select.value == 'red') {
		g_filter.style.backgroundColor = '#D73131';
	}
	if (g_select.value == 'none') {
		g_filter.style.backgroundColor = 'transparent';
	}



	// R
	if (r_select.value == 'violet') {
		r_filter.style.backgroundColor = '#A649EC';
	}
	if (r_select.value == 'blue') {
		r_filter.style.backgroundColor = '#3933FF';
	}
	if (r_select.value == 'green') {
		r_filter.style.backgroundColor = '#6FD898';
	}
	if (r_select.value == 'yellow') {
		r_filter.style.backgroundColor = '#E9DE20';
	}
	if (r_select.value == 'orange') {
		r_filter.style.backgroundColor = '#E39F62';
	}
	if (r_select.value == 'red') {
		r_filter.style.backgroundColor = '#D73131';
	}
	if (r_select.value == 'none') {
		r_filter.style.backgroundColor = 'transparent';
	}



	// I
	if (i_select.value == 'violet') {
		i_filter.style.backgroundColor = '#A649EC';
	}
	if (i_select.value == 'blue') {
		i_filter.style.backgroundColor = '#3933FF';
	}
	if (i_select.value == 'green') {
		i_filter.style.backgroundColor = '#6FD898';
	}
	if (i_select.value == 'yellow') {
		i_filter.style.backgroundColor = '#E9DE20';
	}
	if (i_select.value == 'orange') {
		i_filter.style.backgroundColor = '#E39F62';
	}
	if (i_select.value == 'red') {
		i_filter.style.backgroundColor = '#D73131';
	}
	if (i_select.value == 'none') {
		i_filter.style.backgroundColor = 'transparent';
	}



	// Z
	if (z_select.value == 'violet') {
		z_filter.style.backgroundColor = '#A649EC';
	}
	if (z_select.value == 'blue') {
		z_filter.style.backgroundColor = '#3933FF';
	}
	if (z_select.value == 'green') {
		z_filter.style.backgroundColor = '#6FD898';
	}
	if (z_select.value == 'yellow') {
		z_filter.style.backgroundColor = '#E9DE20';
	}
	if (z_select.value == 'orange') {
		z_filter.style.backgroundColor = '#E39F62';
	}
	if (z_select.value == 'red') {
		z_filter.style.backgroundColor = '#D73131';
	}
	if (z_select.value == 'none') {
		z_filter.style.backgroundColor = 'transparent';
	}

	// Y
	if (y_select.value == 'violet') {
		y_filter.style.backgroundColor = '#A649EC';
	}
	if (y_select.value == 'blue') {
		y_filter.style.backgroundColor = '#3933FF';
	}
	if (y_select.value == 'green') {
		y_filter.style.backgroundColor = '#6FD898';
	}
	if (y_select.value == 'yellow') {
		y_filter.style.backgroundColor = '#E9DE20';
	}
	if (y_select.value == 'orange') {
		y_filter.style.backgroundColor = '#E39F62';
	}
	if (y_select.value == 'red') {
		y_filter.style.backgroundColor = '#D73131';
	}
	if (y_select.value == 'none') {
		y_filter.style.backgroundColor = 'transparent';
	}

	// Red
	if (red_select.value == 'blue') {
		red_filter.style.backgroundColor = '#3933FF';
	}
	if (red_select.value == 'green') {
		red_filter.style.backgroundColor = '#6FD898';
	}
	if (red_select.value == 'red') {
		red_filter.style.backgroundColor = '#D73131';
	}
	if (red_select.value == 'none') {
		red_filter.style.backgroundColor = 'transparent';
	}

	// Green
	if (green_select.value == 'blue') {
		green_filter.style.backgroundColor = '#3933FF';
	}
	if (green_select.value == 'green') {
		green_filter.style.backgroundColor = '#6FD898';
	}
	if (green_select.value == 'red') {
		green_filter.style.backgroundColor = '#D73131';
	}
	if (green_select.value == 'none') {
		green_filter.style.backgroundColor = 'transparent';
	}

	// Blue
	if (blue_select.value == 'blue') {
		blue_filter.style.backgroundColor = '#3933FF';
	}
	if (blue_select.value == 'green') {
		blue_filter.style.backgroundColor = '#6FD898';
	}
	if (blue_select.value == 'red') {
		blue_filter.style.backgroundColor = '#D73131';
	}
	if (blue_select.value == 'none') {
		blue_filter.style.backgroundColor = 'transparent';
	}			



}
