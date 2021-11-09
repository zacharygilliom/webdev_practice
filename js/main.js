
function getGreeting(nameList, element) {
	for (i = 0; i < nameList.length; i++) {
		document.getElementById(element+i).innerHTML = nameList[i]
	}
}

getGreeting(["Hello", "World!"],"heading")
