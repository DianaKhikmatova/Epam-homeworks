var cityArray = ["Винница", "Балановка", "Ладыжин", "Луцк", "Владимир-Волынский", "Ковель", "Нововолынск", "Днепропетровск", 
				"Булаховка", "Днепродзержинск", "Жёлтые Воды", "Зеленодольск", "Кривой Рог", "Кринички", "Марганец", "Никополь", 
				"Новомосковск", "Павлоград", "Житомир", "Андреевка", "Бердичев", "Коростень", "Новоград-Волынский", "Ужгород", 
				"Берегово", "Виноградов", "Иршава", "Мукачево", "Рахов", "Свалява", "Тячев", "Хуст", "Запорожье", "Бердянск", 
				"Днепрорудное", "Камыш-Заря", "Мелитополь", "Токмак", "Энергодар", "Ивано-Франковск", "Бурштын", "Калуш", "Коломыя", 
				"Белая Церковь", "Борисполь", "Бровары", "Вышгород", "Припять"];
				
function randomNumber(cityArray) {
	return Math.floor(Math.random() * cityArray.length);
}				
				
function specialSort(cityArray) {
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
}

specialSort(cityArray);