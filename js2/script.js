/**
 * Created by Tamtamlg on 16.03.2016.
 */
//Создать программу, которая будет выполнять следующие действия:
//
//    Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен
//Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя
//Введенное имя, циклом сравнивать с именами в массиве
//Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать
//с помощью alert сообщение об ошибке
//Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо "Андрей" должно быть имя
//текущего пользователя

var Users = [];
var quantityUsers = 5;

for (var i = 0; i < quantityUsers; i++) {
    Users[i] = prompt('Введите любое имя', 'Вася');
}

var currentUser = prompt('Введите имя пользователя', 'Андрей');

for (var i = 0; i < Users.length; i++) {
    if (currentUser === Users[i]) {
        alert(currentUser + ', вы успешно вошли');
        i = Users.length;
    } else {
        alert('Ошибка');
        i = Users.length;
    }
}

