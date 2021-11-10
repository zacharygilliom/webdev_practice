function getGreeting(text, element) {
	if (text.length >1) {
		var output = text[0] + "<BR>";
		for (i = 1; i < text.length; i++) {
			var output = output+ text[i] + "<BR>";
		}
	} else {
		var output = text[0]
	}
	document.getElementById(element).innerHTML = output;
}

var input = window.prompt("Please Enter the Prompt you wish to Print: ");

var text = input.split(" ");

getGreeting(text, "heading");
