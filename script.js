const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	results = fruits.filter(fruit => fruit.toLowerCase().includes(str));

	return results;
}

function searchHandler(e) {
	// TODO
	const inputValue = e.target.value.toLowerCase();
	let results = search(inputValue);
	console.log(results);
	showSuggestions(results);
}

function showSuggestions(results, inputVal) {

	// Create a select element
	const selectElement = document.createElement('div');

	// Iterate over the fruit results and create an option element for each fruit
	results.forEach(fruit => {
		const optionElement = document.createElement('div');
		optionElement.value = fruit;
		optionElement.textContent = fruit;
		selectElement.appendChild(optionElement);
	});

	// Append the select element to a container in the HTML document
	// const container = document.getElementById('fruitContainer');
	// suggestions.appendChild(selectElement);
	suggestions.replaceChildren(selectElement);
}

function useSuggestion(e) {
	console.log(e)
	if (e.target.tagName.toLowerCase() === 'div') {
        // Set the input value to the text content of the clicked option
        input.value = e.target.value;
		// Clear suggestions
        suggestions.innerHTML = '';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);