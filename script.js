
const startButton = document.querySelector("#start-glitch");

const characterItems = document.querySelectorAll('.inputs__block-body .type-btn');
const wordInput = document.querySelector('textarea#word')

let characters = '';

let charactersTemp;
const langButtons = document.querySelectorAll('.btn.lang')
langButtons.forEach(function (item, index) {
	item.addEventListener('click', function () {
		item.classList.toggle('active');
		if (item.classList.contains('active')) {

			if (index == 0) {
				characterItems[0].setAttribute(`data-value`, characterItems[0].getAttribute('data-value') + 'йцукенгшщзхъфывапролджэячсмитьбю')
				characterItems[1].setAttribute(`data-value`, characterItems[1].getAttribute('data-value') + 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ')
			}
			else {
				characterItems[0].setAttribute(`data-value`, characterItems[0].getAttribute('data-value') + 'qwertyuiopasdfghjklzxcvbnm')
				characterItems[1].setAttribute(`data-value`, characterItems[1].getAttribute('data-value') + 'QWERTYUIOPASDFGHJKLZXCVBNM')
			}
		}
		else {
			if (index == 0) {
				characterItems[0].setAttribute(`data-value`, characterItems[0].getAttribute('data-value').replaceAll('йцукенгшщзхъфывапролджэячсмитьбю', ''));
				characterItems[1].setAttribute(`data-value`, characterItems[1].getAttribute('data-value').replaceAll('ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ', ''));
			}
			else {
				characterItems[0].setAttribute(`data-value`, characterItems[0].getAttribute('data-value').replaceAll('qwertyuiopasdfghjklzxcvbnm', ''));
				characterItems[1].setAttribute(`data-value`, characterItems[1].getAttribute('data-value').replaceAll('QWERTYUIOPASDFGHJKLZXCVBNM', ''));
			}
		}
		console.log(characterItems[0].getAttribute(`data-value`));
	});
});

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



//where do you want the text appear
const result = document.querySelector('.result');

//characters


let initInterval, initTimeout;

startButton.addEventListener('click', function () {
	if (!characters) {
		alert('error');
	}
	else {
		clearInterval(initInterval);

		let word = wordInput.value;
		startButton.style.pointerEvents = 'none';
		initInterval = setInterval(() => { glitchText(word, characters) }, 100);
		initTimeout = setTimeout(() => {
			clearInterval(initInterval)
			initInterval = null;
			getNormal(word, characters);
			startButton.style.pointerEvents = 'auto';
		}, 1000);
	}
})

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



