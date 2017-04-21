function allowDrop(event) {
	event.preventDefault();
}

function drag(event) {
	event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	var divCurrent = event.target;
	console.log(divCurrent);
	var expression = divCurrent.childNodes;
	var expressionString = expression[0].innerHTML;
	var firstNumber = expressionString.slice(0, 3);
	var secondNumber = expressionString.slice(6);
	var operator = expressionString.slice(4, 5);
	console.log(data)
	switch (operator) {
		case "*":
			if (data === "drag4") {
				divCurrent.style.backgroundColor = "#dcedc8";
			} else {
				divCurrent.style.backgroundColor = "#fce4ec";
			}
			break;
		case "-":
			if (data === "drag1") {
				divCurrent.style.backgroundColor = "#dcedc8";
			} else {
				divCurrent.style.backgroundColor = "#fce4ec";
			}
			break;
		case "+":
			if (data === "drag3") {
				divCurrent.style.backgroundColor = "#dcedc8";
			} else {
				divCurrent.style.backgroundColor = "#fce4ec";
			}
			break;
		case "/":
			if (data === "drag2") {
				divCurrent.style.backgroundColor = "#dcedc8";
			} else {
				divCurrent.style.backgroundColor = "#fce4ec";
			}
			break;
	}
	event.target.appendChild(document.getElementById(data));
}