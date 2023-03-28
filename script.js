
const startButton = document.querySelector("#start-glitch");

const characterItems = document.querySelectorAll('.inputs__block-body .type-btn');
const wordInput = document.querySelector('textarea#word')

let characters = '';

characterItems.forEach(function (i) {
	i.addEventListener('click', function () {

		i.classList.toggle('active');
		if (i.classList.contains('active'))
			characters += i.getAttribute('data-value');
		else {
			characters = characters.replaceAll(i.getAttribute('data-value'), '')
		}
	})
})


let initInterval, initTimeout;

startButton.addEventListener('click', function () {
	if (!characters) {
		alert('error');
	}
	else {
		clearInterval(initInterval);

		let word = wordInput.value;
		initInterval = setInterval(() => { glitchText(word, characters) }, 100);
		initTimeout = setTimeout(() => {
			clearInterval(initInterval)
			initInterval = null;
			getNormal(word, characters)
		}, 1000);
	}
})

















//what word/sentence do you want to display
let word = 'I like it here, I am a programmer';

//where do you want the text appear
const result = document.querySelector('.result');

//english characters
const charactersLowercase = 'abcdefghijklmnopqrstuvwxyz';
const charactersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charactersNumbers = '0123456789';

let tempWord;
//glitch making function
function glitchText(word, characters) {

	//console.log(word);
	tempWord = '';
	for (let i = 0; i < word.length; i++) {
		if (word[i] != ' ') {
			tempWord += characters[Math.floor(Math.random() * characters.length)];
		}
		else {
			tempWord += ' ';
		}

	}
	console.log(tempWord)

	result.innerHTML = tempWord;

}


let newInterval;

//function to smoothly get the glitched text to normal
function getNormal(word, characters) {
	let normal = '';

	length = 0;
	newInterval = setInterval(() => {
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
		//console.log(normal)
		result.innerHTML = normal;
		normal = '';
		length++;
		if (length == word.length + 1) {
			clearInterval(newInterval);

		}

	}, 100)


}



