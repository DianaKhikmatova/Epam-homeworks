var i = 1;

function standardCheck() {
	document.getElementById('goodNameStandard').style.display = 'block';
	document.getElementById('goodNameExclusive').style.display = 'none';
	document.getElementById('environment').style.display = "none";
	document.getElementById('diameter').style.display = "none";
	document.getElementById('material').style.display = "none";
}

function exclusiveCheck() {
	document.getElementById('goodNameStandard').style.display = 'none';
	document.getElementById('goodNameExclusive').style.display = 'block';
	document.getElementById('environment').style.display = "block";
	document.getElementById('diameter').style.display = "block";
	document.getElementById('material').style.display = "block";
}

function standardCheckInner(a) {
	console.log(a);
	document.getElementById('goodNameStandard' + a).style.display = 'block';
	document.getElementById('goodNameExclusive' + a).style.display = 'none';
	document.getElementById('environment' + a).style.display = "none";
	document.getElementById('diameter' + a).style.display = "none";
	document.getElementById('material' + a).style.display = "none";
}

function exclusiveCheckInner(a) {
	console.log(a);
	document.getElementById('goodNameStandard' + a).style.display = 'none';
	document.getElementById('goodNameExclusive' + a).style.display = 'block';
	document.getElementById('environment' + a).style.display = "block";
	document.getElementById('diameter' + a).style.display = "block";
	document.getElementById('material' + a).style.display = "block";
}

function detete(currentElement) {
	currentElement.parentNode.removeChild(currentElement.parentNode);
}

function add() {
	var divMain =  document.getElementById('container');
	let f = document.createElement('form');
	f.id = "form" + i;
	
	let fs1 = document.createElement('fieldset');
	let l1 = document.createElement('legend');
	l1.innerHTML = "Общие:";
	
	let inp1 = document.createElement('input');
	//inp.attr('type', 'text');
	inp1.type = "date";
	inp1.id = "date" + i;
	//console.log(inp1.id)
	inp1.value = document.getElementById('date').value;
	
	let inp2 = document.createElement('input');
	inp2.type = "text";
	inp2.id = "phone" + i;
	inp2.value = document.getElementById('phone').value;
	
	let inp3 = document.createElement('input');
	inp3.type = "text";
	inp3.id = "name" + i;
	inp3.value = document.getElementById('name').value;
	
	fs1.appendChild(l1);
	fs1.appendChild(inp1);
	fs1.appendChild(inp2);
	fs1.appendChild(inp3);
	
	//-------------------------------------------//
	
	let fs2 = document.createElement('fieldset');
	let l2 = document.createElement('legend');
	l2.innerHTML = "Транспортировка:";
	
	let inp4 = document.createElement('input');
	inp4.type = "text";
	inp4.id = "phone-reciever" + i;
	inp4.value = document.getElementById('phone-reciever').value;
	
	let inp5 = document.createElement('select');
	inp5.id = "post" + i;
	let inp5_1 = document.createElement('option');
	inp5_1.value = "Новая почта";
	inp5_1.innerHTML = "Новая почта";
	let inp5_2 = document.createElement('option');
	inp5_2.value = "Интайм";
	inp5_2.innerHTML = "Интайм";
	let inp5_3 = document.createElement('option');
	inp5_3.value = "Автолюкс";
	inp5_3.innerHTML = "Автолюкс";
	inp5.appendChild(inp5_1);
	inp5.appendChild(inp5_2);
	inp5.appendChild(inp5_3);
	let selectedItemPost = document.getElementById('post').value;
	switch(selectedItemPost) {
		case 'Новая почта':
			inp5_1.selected = true;
			break;
		case 'Интайм':
			inp5_2.selected = true;
			break;
		case 'Автолюкс':
			inp5_3.selected = true;
			break;
	}
	//inp5.value = document.getElementById('post').value;
	
	let inp6 = document.createElement('input');
	inp6.type = "text";
	inp6.id = "city" + i;
	inp6.value = document.getElementById('city').value;
	
	let inp7 = document.createElement('input');
	inp7.type = "date";
	inp7.id = "data-transport" + i;
	inp7.value = document.getElementById('data-transport').value;
	
	fs2.appendChild(l2);
	fs2.appendChild(inp4);
	fs2.appendChild(inp5);
	fs2.appendChild(inp6);
	fs2.appendChild(inp7);

	/*-------------------------------------------*/
	
	let fs3 = document.createElement('fieldset');
	let l3 = document.createElement('legend');
	l3.innerHTML = "Товар:";
	
	let inp8 = document.createElement('input');
	inp8.type = "radio";
	inp8.name = "good_type" + i;
	inp8.id = "standard" + i;
	inp8.className = "radio";
	let lab1 = document.createElement('label');
	lab1.id = "lab1" + i;
	lab1.innerHTML = "Стандартный";
	
	let inp9 = document.createElement('input');
	inp9.type = "text";
	inp9.id = "goodNameStandard" + i;
	inp9.value = document.getElementById('goodNameStandard').value;
	
	let inp10 = document.createElement('input');
	inp10.type = "radio";
	inp10.name = "good_type" + i;
	inp10.id = "exclusive" + i;
	inp10.className = "radio";
	let lab2 = document.createElement('label');
	lab2.id = "lab2" + i;
	lab2.innerHTML = "Эксклюзивный";
	
	let inp11 = document.createElement('input');
	inp11.type = "text";
	inp11.id = "goodNameExclusive" + i;
	inp11.value = document.getElementById('goodNameExclusive').value;
	
	let inp12 = document.createElement('select');
	inp12.id = "environment" + i;
	let inp12_1 = document.createElement('option');
	inp12_1.value = "Воздух";
	inp12_1.innerHTML = "Воздух";
	let inp12_2 = document.createElement('option');
	inp12_2.value = "Металл";
	inp12_2.innerHTML = "Металл";
	inp12.appendChild(inp12_1);
	inp12.appendChild(inp12_2);
	let selectedItemEnv = document.getElementById('environment').value;
	switch(selectedItemEnv) {
		case 'Воздух':
			inp12_1.selected = true;
			break;
		case 'Металл':
			inp12_2.selected = true;
			break;
	}
	
	let inp13 = document.createElement('input');
	inp13.type = "text";
	inp13.id = "diameter" + i;
	inp13.value = document.getElementById('diameter').value;
	
	let inp14 = document.createElement('select');
	inp14.id = "material" + i;
	let inp14_1 = document.createElement('option');
	inp14_1.value = "Чёрный";
	inp14_1.innerHTML = "Чёрный";
	let inp14_2 = document.createElement('option');
	inp14_2.value = "Нержавейка";
	inp14_2.innerHTML = "Нержавейка";
	let inp14_3 = document.createElement('option');
	inp14_3.value = "12Х18Н10Т";
	inp14_3.innerHTML = "12Х18Н10Т";
	inp14.appendChild(inp14_1);
	inp14.appendChild(inp14_2);
	inp14.appendChild(inp14_3);
	let selectedItem = document.getElementById('material').value;
	switch(selectedItem) {
		case 'Чёрный':
			inp14_1.selected = true;
			break;
		case 'Нержавейка':
			inp14_2.selected = true;
			break;
		case '12Х18Н10Т':
			inp14_3.selected = true;
			break;
	}
	//inp14.value = document.getElementById('material').value;
	
	fs3.appendChild(l3);
	fs3.appendChild(inp8);
	fs3.appendChild(lab1);
	fs3.appendChild(inp9);
	fs3.appendChild(inp10);
	fs3.appendChild(lab2);
	fs3.appendChild(inp11);
	fs3.appendChild(inp12);
	fs3.appendChild(inp13);
	fs3.appendChild(inp14);
	
	
	/*------------------------------------------------------*/
	
	let fs4 = document.createElement('fieldset');
	
	let inp15 = document.createElement('input');
	inp15.type = "number";
	inp15.id = "price" + i;
	inp15.value = document.getElementById('price').value;
	
	let inp16 = document.createElement('input');
	inp16.type = "number";
	inp16.id = "quantity" + i;
	inp16.value = document.getElementById('quantity').value;
	
	let inp19 = document.createElement('p');
	inp19.innerHTML = "Сумма: " + inp16.value * inp15.value + " грн";
	
	fs4.appendChild(inp15);
	fs4.appendChild(inp16);
	fs4.appendChild(inp19);
	
	
	/*------------------------------------------------------*/
	
	let fs5 = document.createElement('fieldset');
	let l5 = document.createElement('legend');
	l5.innerHTML = "Оплата:";
	
	let inp20 = document.createElement('p');
	if (inp16.value * inp15.value < 1000) {
		inp20.innerHTML = "Сумма к оплате: " + inp16.value * inp15.value + " грн";
	} else {
		inp20.innerHTML = "Сумма к оплате: " + (inp16.value * inp15.value - (inp16.value * inp15.value) * 0.07) + " грн";
	}
	
	fs5.appendChild(l5);
	fs5.appendChild(inp20);
	
	/*-----------------------------------------------------*/
	
	let inp17 = document.createElement('input');
	inp17.type = "button";
	inp17.onclick = function(){
		var currentForm = inp17.parentNode;
		var number = (currentForm.id).slice(4);
		
		currentForm[1].value = document.getElementById("date" + number).value;
		currentForm[2].value = document.getElementById("phone" + number).value;
		currentForm[3].value = document.getElementById("name" + number).value;
		currentForm[5].value = document.getElementById("phone-reciever" + number).value;
		currentForm[6].value = document.getElementById("post" + number).value;
		currentForm[7].value = document.getElementById("city" + number).value;
		currentForm[8].value = document.getElementById("data-transport" + number).value;
		currentForm[11].value = document.getElementById("goodNameStandard" + number).value;
		currentForm[13].value = document.getElementById("goodNameExclusive" + number).value;
		currentForm[14].value = document.getElementById("environment" + number).value;
		currentForm[15].value = document.getElementById("diameter" + number).value;
		
		//currentForm[16].value = document.getElementById("material" + number).value;
		
		/*var materialItems = currentForm[16].childNodes;
		let selectedItemEdit = document.getElementById('material" + number').value;
		console.log(selectedItemEdit);
		switch(selectedItemEdit) {
			case 'Чёрный':
				materialItems[0].selected = true;
				break;
			case 'Нержавейка':
				materialItems[1].selected = true;
				break;
			case '12Х18Н10Т':
				materialItems[2].selected = true;
				break;
		}*/
			
		currentForm[18].value = document.getElementById("price" + number).value;
		currentForm[19].value = document.getElementById("quantity" + number).value;
		
		if (document.getElementById('standard' + number).checked === true) {
			currentForm[10].checked = true;
			standardCheckInner(number);
		} else if (document.getElementById('exclusive' + number).checked === true) {
			currentForm[12] = true;
			exclusiveCheckInner(number);
		}
		
		let innerNode1 = currentForm[17].childNodes;
		let innerNode2 = currentForm[20].childNodes;
		
		let priceIndex = 18;
		let qttIndex = 19;		
		innerNode1[2].innerHTML = "Сумма: " + currentForm[priceIndex].value * currentForm[qttIndex].value + " грн";
		if (currentForm[priceIndex].value * currentForm[qttIndex].value < 1000) {
			innerNode2[1].innerHTML = "Сумма к оплате: " + currentForm[priceIndex].value * currentForm[qttIndex].value + " грн";
		} else {
			innerNode2[1].innerHTML = "Сумма к оплате: " + (currentForm[priceIndex].value * currentForm[qttIndex].value - 
										(currentForm[priceIndex].value * currentForm[qttIndex].value) * 0.07) + " грн";
		}
	}
	inp17.value = "Редактировать";
	
	let inp18 = document.createElement('input');
	inp18.type = "button";
	inp18.value = "Удалить";
	inp18.onclick = function(){
		inp18.parentNode.parentNode.removeChild(inp18.parentNode);
	}
	
	f.appendChild(fs1);
	f.appendChild(fs2);
	f.appendChild(fs3);
	f.appendChild(fs4);
	f.appendChild(fs5);
	f.appendChild(inp17);
	f.appendChild(inp18);
	
	divMain.appendChild(f);
	
	var number2 = (inp8.id).slice(8);
	
	inp8.onclick = function(){
		standardCheckInner(number2);
	}
	inp10.onclick = function(){
		exclusiveCheckInner(number2);
	}
	if (document.getElementById('standard').checked === true) {
		inp8.checked = true;
		standardCheckInner(i);
	} else if (document.getElementById('exclusive').checked === true) {
		inp10.checked = true;
		exclusiveCheckInner(i);
	}
	
	i++;
}
