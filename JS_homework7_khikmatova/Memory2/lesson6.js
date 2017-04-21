var previousValue = null;

function generateTable() {
	let rowsNumber = document.getElementById("rows").value;
	let colsNumber = document.getElementById("cols").value;
	
	if (rowsNumber * colsNumber % 2 === 1) {
		alert("Such table is not allowed");
		return;
	} 
	
	let numberArray = [];
	for (let i = 1; i <= ((rowsNumber * colsNumber) / 2); i++) {
		numberArray.push(i);
		numberArray.push(i);
	}
	
	var divMain =  document.getElementById('container');
	let t = document.createElement('table');
	t.addEventListener("load", hide(), false);
	let temp = new Array();
	
	for (let i = 0; i < rowsNumber; i++) {
		let r = document.createElement('tr');
		for (let j = 0; j < colsNumber; j++) {
			let c = document.createElement('td');
			let number = Math.floor(Math.random() * numberArray.length);
			c.innerHTML = numberArray[number];
			c.addEventListener('click', listener, false);
			numberArray.splice(number, 1);
			r.appendChild(c);
		}
		t.appendChild(r);
	}
	divMain.appendChild(t);
}

var listener = function(event) {
	if (previousValue === null) { 
		var current = event.target;
		previousValue = current;
		current.style.backgroundColor = "#fff";
		current.removeEventListener('click', listener, false);
	} else {
		var current = event.target;
		if (previousValue.innerHTML === current.innerHTML) {
			current.style.backgroundColor = "#fff";
			current.removeEventListener('click', listener, false);
			previousValue = null;
		} else {
			current.style.backgroundColor = "#fff";
			setTimeout(function(){ 
				previousValue.style.backgroundColor = "#424242";
				current.style.backgroundColor = "#424242";
				current.removeEventListener('click', listener, false);
				previousValue = null;
			}, 500);
		}
	}
}

/*var listener = function(event) {
	if (previousValue === null) { 
		var current = event.target;
		previousValue = current;
		current.removeEventListener('click', listener, false);
		current.style.backgroundColor = "#fff";
	} else {
		var current = event.target;
		current.style.backgroundColor = "#fff";
		previousValue.removeEventListener('click', listener, false);
		current.removeEventListener('click', listener, false);
		if (previousValue.innerHTML !== current.innerHTML) {
			setTimeout(function(){ 
				previousValue.style.backgroundColor = "#000";
				current.style.backgroundColor = "#000";
				previousValue.addEventListener('click', listener, false);
				current.addEventListener('click', listener, false);
				previousValue = null;
			}, 500);		
		} else {
			previousValue = null;
		}
	}
}*/

function hide() {
	cells = document.getElementsByTagName('td');
	setTimeout(function(){ 
		for (let i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = "#000";
		}
	}, 2000);
}

function clear () {
	for (let i = 0; i < rowsNumber * colsNumber; i++) {
		document.getElementsByTagName('tr').innerHTML = "";
	}
}