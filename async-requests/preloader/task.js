//Домашнее задание к модулю "Базовый JavaScript в браузере", тема "Асинхронные запросы"
//Задача 1. Анимация загрузки данных

const item = document.querySelector('.item');
const img = document.getElementById('loader');

item.style.display = 'block'; //виды валют будут располагаться в столбик

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json'; //ответ получим в формате json
xhr.send();
xhr.onload = function(event) {
    event.preventDefault();
    console.log(xhr.response);
    img.classList.remove('loader_active');//удалим картинку

    const responseObj = xhr.response.response.Valute;

    for (let i in responseObj) {
      let addDiv = document.createElement('div'); //добавим div в разметку
      addDiv.innerHTML = '<div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div>';
      item.appendChild(addDiv);
      addDiv.style.display = 'flex'; //значения одной валюты будут располагаться в строчку

      const codeCurrency = addDiv.querySelector('.item__code');
      const valueCurrency = addDiv.querySelector('.item__value');

      codeCurrency.textContent = responseObj[i].CharCode; //из ответа от сервера получим код валюты
      valueCurrency.textContent = responseObj[i].Value; //из ответа от сервера получим значение валюты
    }
}