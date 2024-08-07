//Домашнее задание к занятию «Изменение структуры HTML-документа».
//Задача 2. Простой список дел

const todoForm = document.getElementById('tasks__form');
const todoInput = document.getElementById('task__input');
const todoList = document.getElementById('tasks__list');

todoForm.addEventListener('submit', function(event) {
	event.preventDefault();

	let addDiv = document.createElement('div'); //добавляем div в разметку
	addDiv.className = 'task';

	const newTask = todoInput.value; //создаем новую задачу, значение которой берем из инпута
	if (newTask.trim() === '') { //не будем создавать пустые задачи
	return;
	}

	//меняем разметку ранее созданного div
	addDiv.innerHTML = '<div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>';

	const taskTitle = addDiv.querySelector('.task__title');
	taskTitle.textContent = newTask; 
	todoList.appendChild(addDiv); //добавляем задачи в список под формой
	todoInput.value = ''; // Очистим инпут после добавления задач

//удаление задач
	const taskRemove = addDiv.querySelector('.task__remove');
	taskRemove.addEventListener('click', (e) => {
		e.preventDefault();
		taskRemove.parentElement.remove();
	});
});