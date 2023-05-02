function showKeyboard(e) {
	document.getElementById("keyboard").style.visibility = "visible";
}

function hideKeyboard(e) {
	document.getElementById("keyboard").style.visibility = "hidden";
}

let keyInputs = document.getElementsByClassName("keyInput");
for(let i = 0; i < keyInputs.length; i++) {
	keyInputs[i].onfocus = showKeyboard;
	keyInputs[i].onblur = hideKeyboard;
}