var cityArray = ["�������", "���������", "�������", "����", "��������-���������", "������", "�����������", "��������������", 
				"���������", "���������������", "Ƹ���� ����", "������������", "������ ���", "��������", "��������", "��������", 
				"������������", "���������", "�������", "���������", "��������", "���������", "��������-���������", "�������", 
				"��������", "����������", "������", "��������", "�����", "�������", "�����", "����", "���������", "��������", 
				"������������", "�����-����", "����������", "������", "���������", "�����-���������", "�������", "�����", "�������", 
				"����� �������", "���������", "�������", "��������", "�������"];
				
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
		if (lastLetter === "�" || lastLetter === "�") {
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