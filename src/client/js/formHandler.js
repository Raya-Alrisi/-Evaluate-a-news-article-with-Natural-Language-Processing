
//function to handle form submission
async function handleSubmit (event) {
	event.preventDefault();
	
	const formUrl = document.getElementById('article-url').value;
	
		try{
			const response = await fetch('htttp://localhost:3000/api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ url: formUrl}),
			});
			const data = await response.json();
			document.getElementById('results').innerHTML = `
			   <p>Polarity: ${data.polarity}</p>
			   <p>Subjectivity: ${data.subjectivity}</p>
			   <p>Text: ${data.text}</p>
			`;
		} catch (error) {
			console.log('Error:', error);
			document.getElementById('results').innerHTML = '<p>Error processing request</p>';
		}
}

//export the handleSubmit function
export {handleSubmit};