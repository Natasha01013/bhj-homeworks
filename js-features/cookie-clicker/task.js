//1.2. Игра-кликер

let cookie = document.getElementById('cookie');
let element = 1;
let time = new Date();

class Menu {
  handleEvent(event){
    document.getElementById('clicker__counter').textContent = element;

    switch(event.type) {
      case 'mousedown':
        cookie.width = '250';   //при нажатии на левую кнопку мыши размер увеличивается
        break;
      case 'mouseup':
        element++;
        cookie.width = '200';   //при опускании кнопки мыши размер уменьшается
        break;
    }

    let currentTime = new Date();
    document.getElementById('clicker__speed').textContent = (1000 / (currentTime - time)).toFixed(2);

  }
}

let menu = new Menu();
cookie.addEventListener('mousedown', menu);
cookie.addEventListener('mouseup', menu);