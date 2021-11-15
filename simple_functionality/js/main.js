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
	/*if (document.getElementById("output-list")) {
		document.getElementById("output-list").remove();
	}
	const newDiv = document.createElement("div");
	newDiv.setAttribute("id", "output-list");
	var tableHead = document.createElement("th");
	*/
	var table = document.getElementById("car-table");

	function addCell(tr, text) {
		var td = tr.insertCell();
		td.textContext = text;
		return td;
	}
	var thead = table.createTHead();
	var headerRow = th.insertRow();
	addCell(headerRow, 'Model');
	addCell(headerRow, 'Price');

	models.forEach((item)=>{
		//var opt = document.createTextNode(item+", ");
		newDiv.appendChild(opt);
	});
	const currentDiv = document.getElementById("car-lister");
	currentDiv.insertBefore(newDiv, currentDiv.childNodes[0]); 
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

const form = document.getElementById("cars");
form.addEventListener("change", function(event) {
	event.preventDefault();
	let carBrand = document.getElementById('cars').value;
	if (carBrand) { 
		let models = carModels[carBrand];
		displayModels(models);
	}
});

