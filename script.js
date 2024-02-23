const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const clearButton = document.querySelector('#clearButton');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const searchTerm = str.toLowerCase();
	results = fruit.filter(fruitName => {
		const lowerCaseFruit = fruitName.toLowerCase();
		return lowerCaseFruit.includes(searchTerm);
	})
	return results;
}

function searchHandler(e) {
	const userInput = e.target.value;
    const searchResults = search(userInput);
    showSuggestions(searchResults, userInput);
}


function showSuggestions(results, inputVal) {

		suggestions.innerHTML = '';
	
		
		results.forEach(result => {
			const li = document.createElement('li');
			li.textContent = result;
			suggestions.appendChild(li);
		});
	}


function useSuggestion(e) {
	// Populate the search bar with the selected suggestion
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
		suggestions.innerHTML = '';
    }
}

function highlightSuggestion(e) {
    // Highlight the suggestion on hover
    if (e.target.tagName === 'LI') {
        e.target.classList.add('highlight');
    }
}

function removeHighlight(e) {
    // Remove highlight when not hovering over the suggestion
    if (e.target.tagName === 'LI') {
        e.target.classList.remove('highlight');
    }
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', removeHighlight);
//input.addEventListener('blur', hideSuggestions); // Event listener to hide suggestions on blur
//suggestions.addEventListener('click')