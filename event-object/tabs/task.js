//Домашнее задание к лекции «Объект события». 
//3.Управление вкладками

let navigation = document.querySelectorAll('.tab'); 
let contant = document.querySelectorAll('.tab__content'); 
let btn = document.querySelector('.tab__navigation'); 

//функция, которая будет скрывать вкладки и контент при переключении между ними
function hideTabContent(x) {
	for (let i = x; i < contant.length; i++) {
		contant[i].classList.remove('tab__content_active');
		navigation[i].classList.remove('tab_active');
	}
}

//функция, которая будет показывать вкладку и контент на ней
function showTabContent(y) {
	for (let i = y; i < contant.length; i++) {
		contant[y].classList.add('tab__content_active');
		navigation[y].classList.add('tab_active');
	}
}


btn.addEventListener('click', function(event) {
	let target = event.target;  //в переменную target поместим цель объекта - event.target
		if(target && target.classList.contains('tab')) {  //если клик произошел по родителю вкладок	
			for(let i = 0; i < navigation.length; i++) {
				if (target == navigation[i]) {   //перебираем вкладки tab и сравниваем их с ссылками target
				hideTabContent(0);   //если они совпадают, то скроем все вкладки - hideTabContent(0)
				showTabContent(i);   //и покажем только одну вкладку, совпадающую по номему в счетчике i
				break;
				}
			}
		}
});