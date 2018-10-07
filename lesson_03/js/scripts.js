// # 1
var num = 2, stop = 100;
while(num <= stop) {
	if(num == 2) console.log(num + " - простое число");

	for(var i = 2; i < num; i++) {
		var flag = true;
		if (num % i == 0 ) {
			flag = false; 
			break;
		}
	}
	if (flag == true) console.log(num + " - простое число");
	num++;
}


// #2
var i = 0, n = 10;
do{

	if(i == 0) {
		console.log( i + " - это ноль");
	} else if (i % 2 == 0) {
		console.log(i + " - четное число");
	} else {
		console.log(i + " - нечетное число");
	}
	i++;
} while(i <= n)


// #3
for(var i = 0; i <=9; console.log(i), i++){}


// #4
for(var i = 0; i < 20; i++) {
	a = 'x';
	for( var j = 0; j < i; j++) {
		a +='x';
	}
	console.log(a);
}


