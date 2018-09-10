function filter() {
	if (document.getElementById('red').checked == true) {
		document.getElementsByClassName("prism-colors")[6].style.zIndex = '1'
		document.getElementsByClassName('rectangle')[0].style.backgroundColor = 'red'
	}
	else if (document.getElementById('orange').checked == true) {
		document.getElementsByClassName("prism-colors")[5].style.zIndex = '1'
		document.getElementsByClassName('rectangle')[0].style.backgroundColor = 'orange'

	} else if (document.getElementById('yellow').checked == true) {
		document.getElementsByClassName("prism-colors")[4].style.zIndex = '1'
		document.getElementsByClassName('rectangle')[0].style.backgroundColor = 'yellow'

	} else if (document.getElementById('green').checked == true) {
		document.getElementsByClassName("prism-colors")[3].style.zIndex = '1'
		document.getElementsByClassName('rectangle')[0].style.backgroundColor = 'green'

	} else if (document.getElementById('blue').checked == true) {
		document.getElementsByClassName("prism-colors")[2].style.zIndex = '1'
		document.getElementsByClassName('rectangle')[0].style.backgroundColor = 'blue'

	} else if (document.getElementById('indigo').checked == true) {
		document.getElementsByClassName("prism-colors")[1].style.zIndex = '1'
		document.getElementsByClassName('rectangle')[0].style.backgroundColor = 'indigo'

	} else if (document.getElementById('violet').checked == true) {
		document.getElementsByClassName("prism-colors")[0].style.zIndex = '1'
		document.getElementsByClassName('rectangle')[0].style.backgroundColor = 'violet'
	}
	else {
	 	for (var i = 0; i<=6; i++) {
	 		document.getElementsByClassName("prism-colors")[i].style.zIndex = '0'
	 	}
		document.getElementsByClassName('rectangle')[0].style.backgroundColor = '#c8c8c8'
	}
}


