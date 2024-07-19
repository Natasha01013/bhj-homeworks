//Домашнее задание к лекции «DOM»
//Задача 1. Появление элементов при прокрутке

let reveal = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', () => {
	for (let i = 0; i < reveal.length; i++) {
		let elTop = reveal[i].getBoundingClientRect().top;
		let elBottom = reveal[i].getBoundingClientRect().bottom;
		
		if (elTop < window.innerHeight && elBottom > 0) {
			reveal[i].classList.toggle('reveal_active');
		}
	}
});