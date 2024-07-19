//Домашнее задание к лекции «DOM»
//Задача 3. Онлайн-читалка

const fontSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book');


for (let i = 0; i < fontSize.length; i++) {
		fontSize[i].onclick = function() {
			if(book.classList.contains('book_fs-small')) {
				book.classList.remove('book_fs-small');
			} else if (book.classList.contains('book_fs-big')) {
				book.classList.remove('book_fs-big');
			}

			if(event.target.hasAttribute('data-size')) {
				book.classList.add('book_fs-' + event.target.dataset.size);
			}

			if(!event.target.classList.contains('font-size_active')) {
				for (let x = 0; x < fontSize.length; x++) {
					if (fontSize[x].classList.contains('font-size_active')) {
						fontSize[x].classList.remove('font-size_active');
					}
				}
				event.target.classList.add('font-size_active');
			}
		event.preventDefault();
		}
}