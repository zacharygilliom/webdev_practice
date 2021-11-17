function parseData(data, carBrand, carModel) {
	let carSpecs = data["brands"][carBrand];
	let vehicles = carSpecs["available_vehicles"];
	const desiredVehicles = new Array();
	vehicles.forEach((item) => {
		if (item["name"] === carBrand + " " + carModel) {
			desiredVehicles.push(item);
		}
	});
	displayOptionsTable(desiredVehicles);
}

function loadData(carBrand, carModel) {
	fetch("http://localhost:5000")
	.then(response => {
		return response.json();
	})
	.then(data => parseData(data, carBrand, carModel));
}

function welcomeGreet(welcomeMessage) {
	document.getElementById("welcome-greet-message").innerHTML = welcomeMessage;
}

function carGreet(carMessage) {
	document.getElementById("car-greet-message").innerHTML = carMessage;
}

function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function displayModels(models) {
	var sel = document.getElementById("models");
	if (document.getElementById("model-option")) {
		while (sel.firstChild) {
			sel.removeChild(sel.firstChild);
		}
	}
	models.forEach((item) => {
		var opt = document.createElement("option");
		opt.setAttribute("id", "model-option");
		opt.innerHTML = item;
		sel.appendChild(opt);
	});
}

function displayOptionsTable(models) {
	var table = document.getElementById("table-output");

	function addCell(tr, text) {
		var td = tr.insertCell();
		td.textContent = text;
		return td;
	}
	var thead = document.getElementById("table-header");
	var headerRow = thead.insertRow();

	addCell(headerRow, 'Name');
	addCell(headerRow, 'Price');
	addCell(headerRow, 'Miles');
	addCell(headerRow, 'Distance From You');
	addCell(headerRow, '# of Owners');
	addCell(headerRow, 'Year');

	var tbody = document.getElementById("table-body");
	models.forEach(function(item){
		var row = tbody.insertRow();
		addCell(row, item['name']);
		addCell(row, item['price']);
		addCell(row, item['miles']);
		addCell(row, item['distance_to_you']);
		addCell(row, item['owners']);
		addCell(row, item['year']);
	});
}

var welcomeMessage = "Hello! Welcome To The Car Sales Page!";
welcomeGreet(welcomeMessage);

var carMessage = "Below is a listing of all of our available vehicles, type in the box below which one you would like to view in closer detail.";
carGreet(carMessage);

let carModels = {
	"Honda":["CR-V", "Civic", "Accord", "Passport"],
	"Subaru":["Outback", "Impreza", "Crosstrek", "Forester", "Legacy"],
	"Toyota":["Rav4", "Tundra", "Tacoma", "Corolla"]
};

const cars = document.getElementById("cars");
cars.addEventListener("change", function(event) {
	event.preventDefault();
	let carBrand = document.getElementById('cars').value;
	if (carBrand) { 
		let models = carModels[carBrand];
		displayModels(models);
	}
});
const models = document.getElementById("form2");
models.addEventListener("submit", function(event) {
	event.preventDefault();
	let carBrand = document.getElementById('cars').value;
	let carModel = document.getElementById('models').value;
	loadData(carBrand, carModel);
});

