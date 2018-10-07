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
function substraction(a ,b) {
	return a - b;
}
// var a = 7, b = 3;
//alert(summation(a, b));
// alert(multiplication(a, b));
// alert(division(a, b));
// alert(substraction(a, b));

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

// alert(mathOperation(4, 7, "#"));


// #7
// alert("Результат сравнения null и 0 : " + (null == 0));

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

alert(power(2, -3));



