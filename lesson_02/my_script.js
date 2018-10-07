// #1
var a = 1, b = 1, c, d;
c = ++a;
alert("c = " + c); // инкремент производится префиксно = 2
alert("a = " + a); // значение а также изменилось = 2
d = b++;
alert("d = " + d); // инкремент производится постфиксно d= 1
alert("b = " + b); // значение b увеличилось b = 2
c = (2+ ++a); //2 + (2+1) = 5, значение а = 3
alert("c = " + c); 
d = (2 + b++); // 2 + 2 = 4, значение b = 3
alert("d = " + d);
alert("a = " + a); // a = 3
alert("b = " + b); // b = 3

// #2
var a = 2; var x = 1 + (a *= 2); 
alert("var a = 2; var x = 1 + (a *= 2); = " + x); // 5

// #3
//var a = 1, b = 7; 
//alert("a = " + a + ". b = " + b);

var a, b;
a = prompt("Введите целое число а :");
b = prompt("Введите целое число b :");

if (a >= 0 && b >= 0) {
	alert("Модуль разности чисел a и b равен " + Math.abs(a - b));
} else if (a < 0 && b < 0) {
	alert("Произведение чисел a и b равно " + (a * b));
} else {
	alert("Сумма чисел a и b равна " + (a + b));
}

// #4
var a = prompt("Введите число от 0 до 15 включительно");
switch(a){
	case "0":
		alert("Значение = " + 0);
	case "1":
		alert("Значение = " + 1);
	case "2":
		alert("Значение = " + 2);		
	case "3":
		alert("Значение = " + 3);
	case "4":
		alert("Значение = " + 4);
	case "5":
		alert("Значение = " + 5);
	case "6":
		alert("Значение = " + 6);
	case "7":
		alert("Значение = " + 7);
	case "8":
		alert("Значение = " + 8);
	case "9":
		alert("Значение = " + 9);
	case "10":
		alert("Значение = " + 10);
	case "11":
		alert("Значение = " + 11);
	case "12":
		alert("Значение = " + 12);		
	case "13":
		alert("Значение = " + 13);
	case "14":
		alert("Значение = " + 14);
	case "15":
		alert("Значение = " + 15);
		break;
}

// #5
function summation(a, b){
	return a + b;
}
function multiplication(a, b){
	return a * b;
}
function division(a, b){
	return a / b;
}
function substraction(a, b) {
	return a - b;
}

// #6
function mathOperation(a, b, operation) {
	switch (operation) {
		case "+":
			return summation(a, b);
		case "-":
			return substraction(a, b);
		case "*":
			return multiplication(a, b);
		case "/":
			return division(a, b);
		default:
			alert("Введите в operation: [+, -, *, /]");
			return NaN;
	}
}

// #7
alert("Результат сравнения null и 0 : " + (null == 0));

// #8
function power(val, pow){
	if (pow == 0) {
		return 1;
	} else if(pow > 0) {
		return val * power(val, pow - 1);
	} else if(pow < 0) {
		return 1 / (val * power(val, -pow - 1));
	} 
}



		