//Домашнее задание к лекции «DOM»
//Задача 2. Ротатор рекламы

/*const rotator = Array.from(document.getElementsByClassName('rotator__case'));
let i = 0;

const changeStatus = setInterval( () => {
	let delay = rotator[i].getAttribute('data-speed');

	setTimeout( () => {
		rotator[i].classList.remove('rotator__case_active');
		if (i < rotator.length - 1) {
			i++;
		} else {
			i=0;
		}
		rotator[i].classList.add('rotator__case_active');

		let color = rotator[i].getAttribute('data-color');
		rotator[i].style.color = color;
//		console.log(delay);
	}, delay);
}, 1000);*/

//Альтернативное решение
const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let delay = 1000;
let i = 0;

function toggleClass() {
	rotator.forEach((element) => element.classList.remove('rotator__case_active'));
	rotator[i].classList.add('rotator__case_active');
	i = rotator[i].nextElementSibling ? i + 1 : 0;
	delay = rotator[i].getAttribute('data-speed');
	let color = rotator[i].getAttribute('data-color');
	rotator[i].setAttribute('style', `color: ${color}`);
	setTimeout(toggleClass, delay);
}

setTimeout(toggleClass, delay);