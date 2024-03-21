// js file
import {checkForURL} from './js/urlChecker'
import {handleSubmit} from '.js/formHandler'
// sass file
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/main.scss'

//add event listener to the form 
document.getElementById('article-form').addEventListener('submit', handleSubmit);


export {
	checkForURL,
	handleSubmit
}