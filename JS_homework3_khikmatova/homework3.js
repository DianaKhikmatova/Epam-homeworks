var goods = [
    {
        "id": "1",
        "name": "Ноутбук Lenovo",
        "price": "18000",
        "img": "img/cars/notebook_lenovo.jpg"
    }, {
        "id": "2",
        "name": "Фотокамера Nikon123",
        "price": "25000",
        "img": "img/cars/camera_nikon.jpg"
    }, {
        "id": "3",
        "name": "Apple ipad",
        "price": "35000",
        "img": "img/cars/ipad.jpg"
    }, {
        "id": "4",
        "name": "Samsung Galaxy",
        "price": "20000",
        "img": "img/cars/phone_galaxy.jpg"
    }, {
        "id": "5",
        "name": "Телевизор SUPRA",
        "price": "19000",
        "img": "img/cars/tv_supra.jpg"
    }, {
        "id": "6",
        "name": "Фотокамера Nikon345",
        "price": "25000",
        "img": "img/cars/camera_nikon.jpg"
    }, {
        "id": "7",
        "name": "Apple ipad",
        "price": "35000",
        "img": "img/cars/ipad.jpg",
		"model":"[k1036, k27, k348]"
    }, {
        "id": "8",
        "name": "Фотокамера Nikon1а",
        "price": "25000",
        "img": "img/cars/camera_nikon.jpg"
    }, {
        "id": "9",
        "name": "Motorola",
        "price": "38000",
        "img": "img/cars/motorola.jpg"
    }, {
        "id": "10",
        "name": "Фотокамера Nikon",
        "price": "25000",
        "img": "img/cars/camera_nikon.jpg",
		"model":"[n6, ni27, n8]"
    }, {
        "id": "11",
        "name": "Apple ipad",
        "price": "354000",
        "img": "img/cars/ipad.jpg",
		"model":"[e6, e7, e8]"
    }
]

function isNumber(variable) {
	if (typeof variable === "number") {
		return true;
	} else {
		return false;
	}
}
function isString(variable) {
	if (typeof variable === "string") {
		return true;
	} else {
		return false;
	}
}
function isModel(variable) {
	let pattern = /\b[a-zA-Z]{1}\d+/;
	if (variable.match(pattern) !== null) {
		return true;
	} else {
		return false;
	}
}

function printObjectArray(arrayToPrint) {
	for (let i = 0; i < arrayToPrint.length; i++) {		
		for (let key in arrayToPrint[i])
		{
			console.log(key + ": " + (arrayToPrint[i])[key]);
		}
		console.log("");
	}
}

function uniqueVal(value, index, window) { 
    return window.indexOf(value) === index;
}

function search() {
	let temp = [];
	
	for (let i = 0; i < arguments.length; i++) {
		if (isString(arguments[i])) {
			if (isModel(arguments[i])) {
				for (let j = 0; j < goods.length; j++) {
					if ('model' in goods[j]) {
						let modelString = (goods[j].model).replace(/[\[\]\,]/g,'');
						let modelArray = modelString.split(' ');
						for (let k = 0; k < modelArray.length; k++)
						{
							if (modelArray[k] === arguments[i]) {
								temp.push(goods[j]);
								continue;
							}
						}
					}
				}
			} else {
				for (let j = 0; j < goods.length; j++) {
					if (goods[j].name === arguments[i]) {
						temp.push(goods[j]);
						continue;
					}
				}
			}
		}	
		if (isNumber(arguments[i]) && isNumber(arguments[i + 1])) {
			for (let j = 0; j < goods.length; j++) {
				if (goods[j].price > arguments[i].toString() && goods[j].price < arguments[i + 1].toString()) {
					temp.push(goods[j]);
					continue;
				}
			}
			i++;
		} 
	}	
	if (temp.length === 0) {
		console.log("Nothing is found.");
	}
	else {
		let newArr = temp;
		for (let i = 0; i < newArr.length - 1; i++){
			for (let j = 1; j < newArr.length; j++) {
				if (temp[i].id === temp[j].id) {
					newArr.splice(i, 1);
				}
			}
		}
		printObjectArray(newArr);
	}
}
search("Apple ipad", 16000, 22000);