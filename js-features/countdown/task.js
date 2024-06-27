//Задача 1.1. Таймер обратного отсчёта

//Вариант для зачета
//let time = 59;

//const secInterval = setInterval(() => {
//    time--; // С каждой секундой уменьшаем время
//
//    if(time >= 0) {
//       document.getElementById('timer').textContent = time;
//    } else {
//       clearInterval(secInterval); // Останавливаем таймер, поскольку время истекло 
//       alert("Вы победили в конкурсе!");
//    } 
//  }, 1000);





//Повышенный уровень сложности #1 и #2
document.getElementById('status').innerHTML = 'До окончания конкурса осталось: <span id="timer">59</span>';

let deadline = 'June 27 2024 16:49:59 GMT+02:00'; //временная зона, до которой будет вестись отсчет

//высчитываем оставшееся время (разница между дедлайном и текущим времнем)
function getTimeRemaining(endtime){  
  let t = Date.parse(endtime) - Date.parse(new Date());  
  let seconds = Math.floor( (t/1000) % 60 );  
  let minutes = Math.floor( (t/1000/60) % 60 );  
  let hours = Math.floor( (t/(1000*60*60)) % 24 );  
  let days = Math.floor( t/(1000*60*60*24) ); 
  return {  
   'total': t, 
   'days': days,   
   'hours': hours,  
   'minutes': minutes,  
   'seconds': seconds  
  };  
}

//функция будет запускать обратный отсчет, остановится, когда дойдет до 0 и перенаправит на др.страницу
function initialClock(id, endtime) {
    let clock = document.getElementById(id);

    function updateClock(){
        let t = getTimeRemaining(endtime);
        clock.innerHTML = ('0' + t.hours).slice(-2) + ':' + ('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2);

        if(t.total <= 0) {
            clearInterval(timeinterval);
            location = "https://docs.yandex.ru/docs/view?url=ya-disk%3A%2F%2F%2Fdisk%2F%D0%94%D0%BE%D0%B1%D1%80%D0%BE%20%D0%9F%D0%BE%D0%B6%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0%D1%82%D1%8C.pdf&name=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%20%D0%9F%D0%BE%D0%B6%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0%D1%82%D1%8C.pdf&uid=61303182&nosw=1";
        }
    }

    updateClock(); // запускаем функцию один раз, чтобы избежать задержки в 1 сек
    let timeinterval = setInterval(updateClock, 1000); //затем запускаем таймер через 1 сек
}

initialClock('timer', deadline);