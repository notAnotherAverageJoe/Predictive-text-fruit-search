const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');



const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
//the search will take a string as an agrument and convert it to lowecase, then it
//will filter and create a new array.
function search(str) {
	let results = [];
	const searchTerm = str.toLowerCase();
	results = fruit.filter(fruitName => {
		const lowerCaseFruit = fruitName.toLowerCase();
		return lowerCaseFruit.includes(searchTerm);
	})
	return results;
}
//this function is a handler for keyup event on the input. it will
//call the search funtion being passed into user input and showsuggestions 
//in order to display the results.
function searchHandler(e) {
	const userInput = e.target.value;
    const searchResults = search(userInput);
    showSuggestions(searchResults, userInput);
}

//this function will creal existing suggestions and then create a new li
//for each result it finds and appends them to the suggestion list.
function showSuggestions(results, inputVal) {

		suggestions.innerHTML = '';
	
		
		results.forEach(result => {
			const li = document.createElement('li');
			li.textContent = result;
			suggestions.appendChild(li);
		});
	}

//fills the search bar with selected suggestions when a list item 
//gets clicked and it will clear that suggestion
//used capital LI since it is looking for a tagname and in HTML 
//they are case insensitive, in order to keep things consistent 
//i did the same in JS.
function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
		suggestions.innerHTML = '';
    }
}
//adds a highlight when hovering over suggestions.
function highlightSuggestion(e) {
    // Highlight the suggestion on hover
    if (e.target.tagName === 'LI') {
        e.target.classList.add('highlight');
    }
}

function removeHighlight(e) {
    // Remove highlight when not hovering over the suggestion.
    if (e.target.tagName === 'LI') {
        e.target.classList.remove('highlight');
    }
}
function searchHandler(e) {
    const userInput = e.target.value;
    const searchResults = search(userInput);
    showSuggestions(searchResults, userInput);

    // Checks to see if input is empty and hide suggestions if true
    if (!userInput.trim()) {
        hideSuggestions();
    }
}

// Event listener to hide suggestions on blur
input.addEventListener('blur', hideSuggestions);

function hideSuggestions() {
    // Checks if the input is empty
    if (!input.value.trim()) {
        suggestions.innerHTML = '';  // Clear the suggestion list
        suggestions.classList.remove('has-suggestions');
        input.classList.remove('has-suggestions');
    }
}
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', removeHighlight);
