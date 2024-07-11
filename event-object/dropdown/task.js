//Домашнее задание к лекции «Объект события». 
//1.1.Выпадающие списки

let btn = document.querySelector(".dropdown__value");
let menu = Array.from(document.querySelectorAll(".dropdown__item"));
let list = document.querySelector(".dropdown__list");

btn.addEventListener('click', () => {
	list.classList.toggle("dropdown__list_active");	
});

menu.forEach(function (elem, index) {
  elem.onclick = function () {
  	list.classList.toggle("dropdown__list_active");	
    btn.textContent = menu[index].textContent
    return false;
  };
});