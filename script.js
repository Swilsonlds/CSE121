const jokeHTML = document.querySelector('#joke')
const jokeButton = document.querySelector('#GetJoke')
// gets a new joke from the api //

jokeButton.addEventListener('click', getJoke)

getJoke();

async function getJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	})
    let joke = await response.json();

	jokeHTML.innerHTML = joke.joke;
}

function clear() {
	jokeHTML.innerHTML = ''
}

