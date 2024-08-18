//Домашнее задание к модулю "Базовый JavaScript в браузере", тема "Асинхронные запросы"
//Задача 2. Опрос с выбором результатов

const poll = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json'; //ответ получим в формате json
xhr.send();

xhr.onload = function(event) {
    event.preventDefault();
    console.log(xhr.response);
    
    const responseObj = xhr.response.data.answers;

    for (let i in responseObj){
        let addButton = document.createElement('button');
        addButton.innerHTML = '<button class="poll__answer"></button>';
        pollAnswers.appendChild(addButton);

        poll.textContent = xhr.response.data.title;
        addButton.textContent = responseObj[i];

        addButton.onclick = () => {
            alert('Спасибо, ваш голос засчитан!');
        }
    }


}