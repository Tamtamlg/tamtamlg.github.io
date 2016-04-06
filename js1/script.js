//Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число в указанную степень. 
//Указать число и степень пользователь должен через команду prompt. Результат выполнения функции вывести в консоль. 
//Работать с целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать


//function pow(a, b) {
//	'use strict';
//	var result = a,
//        i;
//	  
//	
//    powerNull(this.b);
//    powerOne();
//	powerMinusOne();
//    powerMinus();
//  
//	if ((b > 0) && (b !== 1)) {
//		for (i = 1; i < b; i++) {
//		  result *= a;
//		}
//	}
//	console.log(result);
//	return result;
//}
//
//function powerNull(b) {
//  if (b === 0) {
//		result = 1;
//	}
//  return result;
//} 

function pow(a, b) {
  if (+a === 0) return 0;
  if (+b === 0) return 1;

  var result = a;

  for (var i = Math.abs(b); i > 1; i--) {
    result *= Math.abs(a);
  }
  return b > 0 ? result : 1/result;
}


var a = prompt ('Введите число, которое нужно возвести в степень', 0);
var b = prompt ('Введите значение степени', 0);

console.log(pow(a, b));
