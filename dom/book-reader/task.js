//Домашнее задание к лекции «DOM»
//Задача 3. Онлайн-читалка

const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');
const colorText = document.querySelectorAll('.color-text')
const colorBg = document.querySelectorAll('.color-bg')

for (let i = 0; i < fontSize.length; i++) {
		fontSize[i].addEventListener('click', function() {
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
		});
}

for (let z = 0; z < colorText.length; z++) {
		colorText[z].addEventListener('click', function() {
			if (book.classList.contains('book_color-gray')){
				book.classList.remove('book_color-gray');
			} else if (book.classList.contains('book_color-whitesmoke')) {
				book.classList.remove('book_color-whitesmoke');
			} else if (book.classList.contains('book_color-black')) {
				book.classList.remove('book_color-black');
			} 

			if(event.target.hasAttribute('data-text-color')) {
				book.classList.add('book_color-' + event.target.dataset.textColor);
			}

			if(!event.target.classList.contains('color_active')) {
				for (let y = 0; y < colorText.length; y++) {
					if (colorText[y].classList.contains('color_active')) {
						colorText[y].classList.remove('color_active');
					}
				}
				event.target.classList.add('color_active');
			}
		event.preventDefault();
		});
}

for (let index = 0; index < colorBg.length; index++) {
		colorBg[index].addEventListener('click', function() {
			if (book.classList.contains('book_bg-gray')) {
				book.classList.remove('book_bg-gray');
			} else if (book.classList.contains('book_bg-black')) {
				book.classList.remove('book_bg-black');
			} else if (book.classList.contains('book_bg-white')) {
				book.classList.remove('book_bg-white');
			}

			if(event.target.hasAttribute('data-bg-color')) {
				book.classList.add('book_bg-' + event.target.dataset.bgColor);
			}

			if(!event.target.classList.contains('color_active')) {
				for (let w = 0; w < colorBg.length; w++) {
					if (colorBg[w].classList.contains('color_active')) {
						colorBg[w].classList.remove('color_active');
					}
				}
				event.target.classList.add('color_active');
			}
		event.preventDefault();
		});
}