// #2
var event, ok;
var choices = [];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }

            choices.push(2);

        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }

                    choices.push(4);

                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                    choices.push(4);

                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }

            choices.push(3);

        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                
                choices.push(4);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                
                choices.push(4);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
// alert('your choices ' + choices);

//----------------------------------------

if(event != -1) {

var LOWER_LIMIT = 2;
var UPPER_LIMIT = 4;

do {
    flag = false;
    var windowToComeback = parseInt(prompt("Введите номер окна из списка [\ " 
        + choices +  "], содержание которого нужно отпечатать. -1 - выход из игры"));
    var countWindows = 4;

    if (windowToComeback == -1 ) break;
    else {
        flag = myCheckAnswer(choices, windowToComeback, LOWER_LIMIT, UPPER_LIMIT);
    }
} while (!flag);


switch(windowToComeback) {
    case 2:
        alert(works.b00);
        break;
    case 3:
        alert(works.c00);
        break;
    case 4:
        alert(works.d00);
        break;
    default:
        break;
    } 

}
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
	return true;
}

//--------------------------------------------
function myCheckAnswer(array, item, lowerLimit, upperLimit) {
    if (isNaN(item) || !isFinite(item)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (item < lowerLimit || item > upperLimit) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
    else if (!(choices.indexOf(windowToComeback) != -1)) {
        alert('Вам необходимо выбрать окно из диапазона');
        return false;
    }
	return true;
}
//--------------------------------------------
