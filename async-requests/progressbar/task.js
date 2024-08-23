//Домашнее задание к модулю "Базовый JavaScript в браузере", тема "Асинхронные запросы"
//Задача 3. Загрузка больших файлов

const progress = document.getElementById('progress');
const form = document.getElementById('form');
const input = document.getElementById('file');

form.onsubmit = function(e) {
    e.preventDefault();
//    let input = this.elements.userfile;
    let file = input.files[0];

    let ajax = new XMLHttpRequest();
    ajax.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total; //проверка на код состояния ответа
    }

    let formData = new FormData();
    formData.append('file', file);

    ajax.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    ajax.send(formData);

    //результат загрузки файла
    ajax.onload = function() {
        if (ajax.status >= 200 && ajax.status < 300) {
            console.log('Файл успешно загружен');
            console.log(`Ошибка ${ajax.status}: ${ajax.statusText}`);
        } else {
            console.log('Не удалось загрузить файл');
            console.log(`Ошибка ${ajax.status}: ${ajax.statusText}`);
        }
    }
}

