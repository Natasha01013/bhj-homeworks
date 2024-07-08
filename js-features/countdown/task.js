//Задача 1.1. Таймер обратного отсчёта

//Вариант для зачета
//let time = 59;

//const secInterval = setInterval(() => {
//   time--; // С каждой секундой уменьшаем время
//
//    if(time >= 0) {
//       document.getElementById('timer').textContent = time;
//    } else {
//       clearInterval(secInterval); // Останавливаем таймер, поскольку время истекло 
//       alert("Вы победили в конкурсе!");
//    } 
//  }, 1000);



//Повышенный уровень сложности #1 и #2 
document.getElementById('status').innerHTML = 'До окончания конкурса осталось: <span id="timer">00:00:00</span>';

//на сколько запускаем таймер
let count = 2;

function start() {
    let startTime = new Date();
    let stopTime = startTime.setHours(startTime.getHours() + count);

    const secInterval = setInterval(function() {
        let now = new Date().getTime();
        let countdown = stopTime - now;

        //переводим миллисекунды в часы, минуты и секунды
        let sec = Math.floor((countdown/1000) % 60 );  
        let min = Math.floor((countdown/1000/60) % 60 );  
        let hour = Math.floor((countdown/(1000*60*60)) % 24 );

        //прибавляем 0 к сек, мин, час
        sec = sec < 10 ? "0" + sec : sec;
        min = min < 10 ? "0" + min : min;
        hour = hour <10 ? "0" + hour : hour;
    
        document.getElementById('timer').innerHTML = hour + ":" + min + ":" + sec;
 
        if (countdown <= 0) {
            clearInterval(secInterval); // Останавливаем таймер, поскольку время истекло 
            alert("Вы победили в конкурсе!");
            location = "https://netology.ru/"; //по окончании перенаправляем на страницу нетологии
        } 
    }, 1000);
}

start();

