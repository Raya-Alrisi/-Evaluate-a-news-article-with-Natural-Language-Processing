function checkForName(inputText){
	console.log("::: Running CheckForName :::", inputeText);
	let names = [
	    "Picard",
		"Janeway",
		"Kirk",
		"Archer",
		"Georgiou"
	];
	
	if(names.includes(inputText)) {
		return true;
	} else {
		return false;
	}
}
export {checkForName};