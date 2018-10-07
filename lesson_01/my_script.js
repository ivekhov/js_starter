// #1
var tempCelsius = prompt("Введите температуру в градусах Цельсия: ");
var tempFarenheit = (9 / 5) * tempCelsius + 32; 
alert("Температура по Цельсию: " + tempCelsius + "\n" + 
	"Температура по Фаренгейту: " + tempFarenheit.toFixed(1));
			
// #2
var admin;
var name; 

name = "Василий";
admin = name; 

alert("Значение переменной admin: " + admin );

// #3
var temp = 1000 + "108";
alert("Выражение 1000 + '108' равно: " + temp);

// #4
// теги async и def запускают скрипты асинхронно 
// async - скрипты запускаются в порядке их загрузки бруазером 
// def - скрипты загружаются асинхронно, но запускаются по очереди , указанной в html документе 
