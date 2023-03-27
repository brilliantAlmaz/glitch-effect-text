


//english

let word = 'I like it here, I am a programmer';

const result = document.querySelector('.result');



const charactersLowercase = 'abcdefghijklmnopqrstuvwxyz';
const charactersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charactersNumbers = '0123456789';



function glitchText(word, type, length) {
	let tempWord = '';

	let characters;
	switch (type) {
		case 0:
			characters = charactersLowercase;
			break;
		case 1:
			characters = charactersUppercase;
			break;
		case 2:
			characters = charactersNumbers;
			break;
		case 3:
			characters = charactersLowercase + charactersUppercase;
			break;
		case 4:
			characters = charactersLowercase + charactersUppercase + charactersNumbers;
			break;

	}

	for (let i = length; i < word.length; i++) {
		if (word[i] != ' ')
			tempWord += characters[Math.floor(Math.random() * characters.length)];
		else {
			tempWord += ' ';
		}
	}

	result.innerHTML = tempWord;
}

//getting to normal
let length = 0;
let normal = '';
function getNormal(word, type) {
	clearInterval(i);

	let characters;
	switch (type) {
		case 0:
			characters = charactersLowercase;
			break;
		case 1:
			characters = charactersUppercase;
			break;
		case 2:
			characters = charactersNumbers;
			break;
		case 3:
			characters = charactersLowercase + charactersUppercase;
			break;
		case 4:
			characters = charactersLowercase + charactersUppercase + charactersNumbers;
			break;
	}

	length = 0;
	let iNew = setInterval(() => {
		for (let i = 0; i < word.length; i++) {
			if (i < length) {
				normal += word[i];
			}
			else {
				if (word[i] != ' ')
					normal += characters[Math.floor(Math.random() * characters.length)];
				else {
					normal += ' ';
				}
			}
		}

		result.innerHTML = normal;
		normal = '';
		length++;
		if (length == word.length + 1) {
			clearInterval(iNew);
		}
		console.log(normal)
	}, 100)

}















let i = setInterval(() => { glitchText(word, 0, 0) }, 100);
let t = setTimeout(() => { getNormal(word, 0) }, 1000)