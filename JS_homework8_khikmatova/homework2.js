var cityArray = ["Винница", "Балановка", "Ладыжин", "Луцк", "Владимир-Волынский", "Ковель", "Нововолынск", "Днепропетровск", 
				"Булаховка", "Днепродзержинск", "Жёлтые Воды", "Зеленодольск", "Кривой Рог", "Кринички", "Марганец", "Никополь", 
				"Новомосковск", "Павлоград", "Житомир", "Андреевка", "Бердичев", "Коростень", "Новоград-Волынский", "Ужгород", 
				"Берегово", "Виноградов", "Иршава", "Мукачево", "Рахов", "Свалява", "Тячев", "Хуст", "Запорожье", "Бердянск", 
				"Днепрорудное", "Камыш-Заря", "Мелитополь", "Токмак", "Энергодар", "Ивано-Франковск", "Бурштын", "Калуш", "Коломыя", 
				"Белая Церковь", "Борисполь", "Бровары", "Вышгород", "Припять"];
				
var usedCities = [];
var tempWord = "";
function add() {
	let newValue = document.getElementById("city-name").value;
	let computerAnswer = document.getElementById("computer-answer").innerHTML;
	let lastLetter = computerAnswer.slice(-1);
	if (lastLetter === "ы" || lastLetter === "ь") {
		lastLetter = computerAnswer.slice(-2, -1);
	}
	lastLetter = lastLetter.toUpperCase();
	if (newValue.slice(0, 1) === lastLetter) {
		let isInCityArray = cityArray.indexOf(newValue);
		let isInUsedCities = usedCities.indexOf(newValue);
		let isInLocalStorage = checkLocalStorage(newValue);
		if (isInUsedCities === -1) {
			if (isInCityArray === -1) {
				localStorage.setItem(localStorage.length, newValue);
			}
			usedCities.push(newValue);
			findStepAnswer();
		} else {
			alert("Этот город уже назывался.");
		}
	} else {
		alert("You lose.");
		console.log("Current session:");
		console.log(usedCities);
		let currentResult = cityArray.concat(usedCities);  
		console.log(currentResult);
	}
}

function giveUp() {
	alert("You lose");
	console.log("Current session:");
	console.log(usedCities);
	let currentResult = cityArray.concat(usedCities);  
	console.log(currentResult);
} 

function merge() {
	let r = randomNumber(cityArray);
	document.getElementById("computer-answer").innerHTML = cityArray[r];
	cityArray.splice(r, 1);
	for (let x in localStorage) {
		cityArray.push(localStorage.getItem(x)); 
	}
	console.log(cityArray);
	//window.localStorage.clear();
}

function checkLocalStorage(value) {
	for (let x in localStorage) {
		if (localStorage.getItem(x) === value) {
			return true;
		}
	}
	return false;
}

function printLocalStorage() {
	for (let x in localStorage) {
		console.log(localStorage.getItem(x) + " ");
	}
}

function printArray(myArray) {
	for (let i = 0; i < myArray.length; i++) {
		console.log(myArray[i]);
	}
}

function findStepAnswer() {
	let currentCity = document.getElementById("city-name").value;
	let lastLetter = currentCity.slice(-1);
	if (lastLetter === "ы" || lastLetter === "ь") {
		lastLetter = currentCity.slice(-2, -1);
	}
	lastLetter = lastLetter.toUpperCase();
	let exist = false;
	for (let i = 0; i < cityArray.length; i++) {
		if (cityArray[i].slice(0, 1) === lastLetter && usedCities.indexOf(cityArray[i]) === -1) {
			usedCities.push(cityArray[i]);
			document.getElementById("computer-answer").innerHTML = cityArray[i];
			exist = true;
			cityArray.splice(i, 1);
			break;
		} 
	}
	if (exist === false) {
		alert("You win!");
		console.log("Current session:");
		console.log(usedCities);
		let currentResult = cityArray.concat(usedCities);  
		console.log(currentResult);
	}
}

function randomNumber(cityArray) {
	return Math.floor(Math.random() * cityArray.length);
}				
				
/*function specialSort(cityArray) {
	let r = randomNumber(cityArray);
	//console.log(cityArray[r]);
	let temp = cityArray[r];
	cityArray.splice(r, 1);
	let tempArray = [temp];
	while (cityArray.length !== 0) {
		let lastLetter = temp.slice(-1);
		if (lastLetter === "ы" || lastLetter === "ь") {
			lastLetter = temp.slice(-2, -1);
		}
		lastLetter = lastLetter.toUpperCase();
		let exist = false;
		for (let i = 0; i < cityArray.length; i++) {
			if (cityArray[i].slice(0, 1) === lastLetter) {
				tempArray.push(cityArray[i]);
				temp = cityArray[i];
				exist = true;
				cityArray.splice(i, 1);
				break;
			} 
		}
		if (exist === false) {
			tempArray.push("");
			r = randomNumber(cityArray);
			temp = cityArray[r];
			cityArray.splice(r, 1);
			tempArray.push(temp);
			//console.log(temp);
		}
	}
	console.log(tempArray);
}*/

//specialSort(cityArray);