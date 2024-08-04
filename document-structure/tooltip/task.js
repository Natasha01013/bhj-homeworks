//Домашнее задание к занятию «Изменение структуры HTML-документа».
//Задача 1. Всплывающая подсказка

const hint = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < hint.length; i++) {
	hint[i].addEventListener('click', function(event) {
		event.preventDefault();

//добавляем div в разметку
		const a = document.getElementsByTagName('a');
		a[0].insertAdjacentHTML('beforeBegin', '<div class="tooltip"></div>');

		const tooltip = document.querySelector('.tooltip');
		tooltip.classList.add('tooltip_active');
		tooltip.innerText = event.target.getAttribute('title');

//повышенный уровень сложности - находим координаты подсказок и размещаем их над текстом
		let position = event.target.getBoundingClientRect();
//		console.log(position);

		let left = position.left + (event.target.offsetWidth - tooltip.offsetWidth) / 2; //посередине подсказки
		if (left < 0) left = 0; // не заезжать за левый край окна

		let top = position.top - tooltip.offsetHeight - 5; //подсказка сверху
		if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
			top = position.top + event.target.offsetHeight + 5;
		}

		tooltip.style.top = top + "px";
		tooltip.style.left = left + "px";
});
}