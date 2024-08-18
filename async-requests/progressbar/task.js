//Домашнее задание к модулю "Базовый JavaScript в браузере", тема "Асинхронные запросы"
//Задача 3. Загрузка больших файлов

const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.onsubmit = function(e) {
    e.preventDefault();

    let ajax = new XMLHttpRequest();
    ajax.upload.onprogress = function(event) {
        progress.value = event.loaded;
    }

    let formData = new FormData();
    formData.append('file', file);

    ajax.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    ajax.send(formData);

    //результат загрузки файла
    ajax.onload = ajax.onerror = function() {
        if (this.status === 200) {
            console.log('Файл успешно загружен');
        } else {
            console.log('Не удалось загрузить файл');
        }
    }
}

