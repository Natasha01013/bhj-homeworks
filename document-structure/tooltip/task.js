//Домашнее задание к занятию «Изменение структуры HTML-документа».
//Задача 1. Всплывающая подсказка

const hint = document.querySelectorAll('.has-tooltip');
hint[0].insertAdjacentHTML('afterEnd', '<div class="tooltip"></div>'); //добавляем div в разметку
const tooltip = document.querySelector('.tooltip');

for (let i = 0; i < hint.length; i++) {
	hint[i].addEventListener('click', function(event) {
		event.preventDefault();

		tooltip.innerText = event.target.getAttribute('title');
		tooltip.classList.add('tooltip_active');

		let position = event.target.getBoundingClientRect(); //находим координаты подсказок, размещаем их над текстом
		console.log(position);

		let left = position.left + (event.target.offsetWidth - tooltip.offsetWidth) / 2; //посередине текста
		if (left < 0) left = 0; // не заезжать за левый край окна
		let top = position.top - tooltip.offsetHeight - 5; //подсказка сверху
		if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
			top = position.top + event.target.offsetHeight + 5;
		}

		tooltip.style.top = top + "px";
		tooltip.style.left = left + "px";
});
}