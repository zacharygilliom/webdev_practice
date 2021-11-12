function welcomeGreet(welcomeMessage) {
	document.getElementById("welcome-greet-message").innerHTML = welcomeMessage;
}
function carGreet(carMessage) {
	document.getElementById("car-greet-message").innerHTML = carMessage;
}

function displayOutput(car) {
	document.getElementById("car-detail-output").innerHTML = car;	
	//Need to add logic to display additional information about the car.
}

var welcomeMessage = "Hello! Welcome To The Car Sales Page!";
welcomeGreet(welcomeMessage);

var carMessage = "Below is a listing of all of our available vehicles, type in the box below which one you would like to view in closer detail.";
carGreet(carMessage);

const form = document.getElementById("form1");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	let car = form.elements['carName'].value;
	displayOutput(car);
});

