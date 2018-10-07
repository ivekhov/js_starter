// #1
var num = prompt("Введите число от 0 до 999 включительно");
num = parseInt(num);

function f(num) {
    if(num > 999) {
        console.log("Необходимо передать в функцию число, не больше 999");
        alert("Необходимо передать в функцию число, не больше 999"); // копия сообщения выводится в браузер
        num = undefined;
    } else if(num <  0) {
        console.log("Необходимо передать в функцию число, не меньше 0"); 
        alert("Необходимо передать в функцию число, не меньше 0"); // копия сообщения выводится в браузер
        num = undefined ;
    } else if (!(num >= 0 || num <= 990)) {
        console.log("Необходимо передать в функцию число, а не что-либо иное");
        console.log("Необходимо передать в функцию число, а не что-либо иное");   // копия сообщения выводится в браузер
        num = undefined;
    }

    var hunds, tens, ones;

    ones = num % 10;
    tens = (num % 100 - ones) / 10;
    hunds = (num - num % 100) / 100;

    var myObject = {
        ones: ones,
        tens: tens,
        hundreds: hunds
    };
    return myObject;
}

var temp = f(num);

console.log(temp);
alert('Сотни: ' + temp.hundreds + ", десятки: " + temp.tens + ", единицы:  " + temp.ones); // копия сообщения выводится в браузер
