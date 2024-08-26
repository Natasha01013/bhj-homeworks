//Домашнее задание к модулю "Основы JavaScript в браузере", тема "Хранение состояния на клиенте и отправка на сервер"
//Задача 2. Всплывающее окно

const subscribe = document.getElementById('subscribe-modal');
const modal = document.querySelector('.modal__close');

window.onload = () => {
const getCookie = (name) => {
    let pairs = document.cookie;
    let cookie = pairs.split(name + '=');
    return cookie.pop(); 
}

   if (getCookie('subscribe') !== 'closed') {
        subscribe.classList.add('modal_active');
   }
}

modal.onclick = () => {
    subscribe.classList.remove('modal_active');
    document.cookie = 'subscribe=closed';
}