function checkForUrl(inputText){
	console.log("::: Running checkForUrl :::", inputText);
	
	const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
	
	return urlRegex.test(inputText);
}

export {checkForUrl};