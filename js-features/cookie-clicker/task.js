//1.2. Игра-кликер
let cookie = document.getElementById('cookie');
let counterDisplay = document.getElementById('clicker__counter');
let speedDisplay = document.getElementById('clicker__speed');

let time = Date.now();

cookie.onclick = function() {
  cookie.width = ++counterDisplay.textContent % 2 ? 250 : 200;
  let currentTime = Date.now();
  speedDisplay.textContent = (1 / ((currentTime - time) / 1000)).toFixed(2);
  time = currentTime;  
}


//Вариант решения, когда размер увеличивается при нажатии и опускании на мышку
//let element = 1;
//class Menu {
//  handleEvent(event){
//    document.getElementById('clicker__counter').textContent = element;
//    element++;
//
//    switch(event.type) {
//      case 'mousedown':
//        cookie.width = '250';   //при нажатии на левую кнопку мыши размер увеличивается
//        break;
//      case 'mouseup':
//        cookie.width = '200';   //при опускании кнопки мыши размер уменьшается
//        break;
//    }
//
//    let currentTime = Date.now();
//    document.getElementById('clicker__speed').textContent = (1 / ((currentTime - time) / 1000)).toFixed(2);
//    time = currentTime;
//  }
//}
//
//let menu = new Menu();
//cookie.addEventListener('mousedown', menu);
//cookie.addEventListener('mouseup', menu);