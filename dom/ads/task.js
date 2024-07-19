//Домашнее задание к лекции «DOM»
//Задача 2. Ротатор рекламы

const rotator = Array.from(document.getElementsByClassName('rotator__case'));
let delay = 1000;
let i = 0;

const changeStatus = setInterval( () => {
	rotator[i].classList.remove('rotator__case_active');
	if (i < rotator.length - 1) {
		i++;
	} else {
		i=0;
	}
	rotator[i].classList.add('rotator__case_active');

	let color = rotator[i].getAttribute('data-color');
	rotator[i].style.color = color;

//	delay = rotator[i].getAttribute('data-speed');
//	console.log(delay);
//	delay = rotator[i].dataset.speed;

}, delay);