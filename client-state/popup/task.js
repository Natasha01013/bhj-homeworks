//Домашнее задание к модулю "Основы JavaScript в браузере", тема "Хранение состояния на клиенте и отправка на сервер"
//Задача 2. Всплывающее окно

const subscribe = document.getElementById('subscribe-modal');
const modal = document.querySelector('.modal__close');

window.onload = () => {
const getCookie = (name) => {
    const pairs = document.cookie.split("; ");
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie;
}

   if (getCookie('subscribe') !== 'closed') {
        subscribe.classList.add('modal_active');
   }
}

modal.onclick = () => {
    subscribe.classList.remove('modal_active');
    document.cookie = 'subscribe=closed';
}