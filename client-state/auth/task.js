//Домашнее задание к модулю "Основы JavaScript в браузере", тема "Хранение состояния на клиенте и отправка на сервер"
//Задача 3.Авторизация 

const form = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const btn = document.getElementById('signin__btn');
const welcomeUser = document.getElementById('user_id');


form.onsubmit = function(e) {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    let formData = new FormData(document.getElementById('signin__form'));

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    
    xhr.onload = () => {
    let responsePars = JSON.parse(xhr.response);
    console.log(responsePars);
    if (xhr.readyState === 4) {
       let userId = Object.values(responsePars)[1]
        localStorage.setItem('id', userId);
        welcomeUser.textContent = userId;
        welcome.classList.add('welcome_active');
        form.classList.remove('signin_active');
    } else {
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`)
        alert('Неверный логин/пароль');
    }
    }

    xhr.send(formData);
}  

window.onload = () => { 
    if (localStorage.getItem('id')) { //если в localStorage имеется id пользователя, то сразу выводим Добро пожаловать
        form.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        welcomeUser.textContent = localStorage.getItem('id');
    } else { //если нет, то выводим форму ввода логин/пароль
        welcome.classList.remove('welcome_active');
        form.classList.add('signin_active');
    }
}