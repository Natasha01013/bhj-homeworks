//Домашнее задание к модулю "Базовый JavaScript в браузере", тема "Хранение состояния на клиенте"
//Задача 1. Текстовый редактор

const textArea = document.getElementById('editor');
const btn = document.getElementById('button');

textArea.value = localStorage.getItem('area');
textArea.oninput = () => {
  localStorage.setItem('area', textArea.value)
};

btn.onclick = () => {
    textArea.value = '';
    localStorage.removeItem('area');
}