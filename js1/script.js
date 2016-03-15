//Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число в указанную степень. 
//Указать число и степень пользователь должен через команду prompt. Результат выполнения функции вывести в консоль. 
//Работать с целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать


function pow(a, b) {
	var result = a;
	var firstResult = a;
	if (b == 0) {
		result = 1;
	} 
	if (b == 1) {
		result = a;
	}
	if (b > 0) { 
		for (var i = 1; i < b; i++) { 
		result *= a;
		}
	}
	if (b == -1) {
		result = 1/a;
	}
	if (b < 0 && b !== -1) { 
		for (var i = 1; i < (b*(-1)); i++) { 
		firstResult *= a;
		result = 1/firstResult;
		}
	}
	console.log(result);
	return (result);
} 

var a = prompt ('Введите число, которое нужно возвести в степень', 0);
var b = prompt ('Введите значение степени', 0);

pow(a, b);
