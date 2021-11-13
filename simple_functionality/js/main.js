function welcomeGreet(welcomeMessage) {
	document.getElementById("welcome-greet-message").innerHTML = welcomeMessage;
}
function carGreet(carMessage) {
	document.getElementById("car-greet-message").innerHTML = carMessage;
}

function displayOutput(models) {
	const newDiv = document.createElement("div");
	models.forEach((item)=>{
		var opt = document.createTextNode(item+", ");
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

const form = document.getElementById("submit");
form.addEventListener('click', function(event) {
	event.preventDefault();
	let carBrand = document.getElementById('cars').value;
	let models = carModels[carBrand];
	displayOutput(models);
});

