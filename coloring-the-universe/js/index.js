
// TODO Resets images to a default
function reset() {
	
}

function rgb_reset() {

}

// Changes the color of the prism
// Manipulates the z-index to hide and show the rainbow colors
function filter(color) {
	// hide all colors
	for (var i=0; i<=6; i++) {
		Object.assign(document.getElementsByClassName('camera-filter')[i].style,{visibility:"hidden", opacity: "0", top: "-58px", transition: "0s", zIndex: '0'});
		document.getElementsByClassName("prism-colors")[i].style.zIndex = '0';

	}
	Object.assign(document.getElementById(color).style,{visibility:"visible", backgroundColor: color, opacity: "1", top: "-36px", transition: "1.2s", zIndex: '1'});
	document.getElementsByClassName('white-cover')[0].style.display = 'block';
	setTimeout(function() {
		document.getElementsByName(color)[0].style.zIndex = 3;	
	}, 900);
}



// Turns filter on and off
function check(filter) {
	var filter = document.getElementsByClassName(filter)[0];
	(filter.style.display != 'block') ? filter.style.display = 'block' : filter.style.display = 'none';
	console.log(filter);
}



// gets the value selected on the dropdown and applies it to image class
function color_picker(e, id){
	document.getElementsByClassName(id)[0].style.backgroundColor = e;
}



// Update the brightness of the slider
function update_slider(range, filter) {
	var filter = document.getElementsByClassName(filter)[0];
	filter.style.WebkitFilter = 'brightness('+ range +')'; 
	console.log(range,filter)
}


// 
function select(object) {
	var dict = {
  	m63: ['u', 'b', 'v', 'r', 'i', 'ha'],
  	m33: ['u', 'b', 'v', 'r', 'i', 'ha'],
	};
	for (var i = 0; i<6; i++) {
		document.getElementsByClassName('image_filter')[i].style.backgroundImage = "url('assets/" + object + "/png/" + object + "_" + dict[object][i] + ".png')";
		document.getElementsByClassName('filter-label')[i].innerHTML = dict[object][i]
	}			
}