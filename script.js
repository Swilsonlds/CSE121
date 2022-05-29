// My program is a random joke generator //
// it will retrieve both dad jokes, and random jokes //
// some of the normal jokes can be kind of filthy //
// so I apologize in advance //

// data needed for fetching regular joke //
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
		'X-RapidAPI-Key': 'aa42676130msh7e7cb379e03f053p1498fajsn8d2142eefd54'
	}
};

const jokeHTML = document.querySelector('#joke1')
const joke2HTML = document.querySelector('#joke2')
const jokeButton = document.querySelector('#GetJoke')
const jokeButton2 = document.querySelector('#GetJoke2')
const clearButton = document.querySelector('#clear')

// button that calls function to get new joke//
jokeButton.addEventListener('click', getDadJoke)
jokeButton2.addEventListener('click', getNormalJoke)

//  calls function that clears joke that is currently displayed
clearButton.addEventListener('click', clear)

// retrieves dad joke from the API and stores it in the HTML //
async function getDadJoke() {
	jokeHTML.innerHTML = ''
	joke2HTML.innerHTML = ''
    const response = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	})
    let joke = await response.json();

	jokeHTML.innerHTML = joke.joke;
}

// retrieves non-dad joke from different API and stores it in HTML //
async function getNormalJoke() {
	jokeHTML.innerHTML = ''
	joke2HTML.innerHTML = ''
    const response = await fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json', options)
	
    let joke = await response.json();

	jokeHTML.innerHTML = joke.setup;
	joke2HTML.innerHTML = joke.delivery;
}

function clear() {
	jokeHTML.innerHTML = ''
	joke2HTML.innerHTML = ''
}

