// const my_num = prompt();
// function evenOdd() {
//   const arr = ["Четное", "Не четное"]
//   return arr[(my_num * my_num) % 2]
//   return my_num % 2 && 'odd' || 'even'
// }
// alert(evenOdd());
//MACCИВЫ
console.log("\u041C\u0410\u0421\u0421\u0418\u0412\u042B\uD83D\uDE42");
/*Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.*/
// 1
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-1\uD83D\uDE42");
// Функция принимает массив и выводит его на экран.
function showArr(myArr) {
    console.log(myArr);
}
showArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]);
// 2
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-2\uD83D\uDE42");
// Функция принимает массив и выводит только четные
// элементы.
function evenArr(myArr) {
    var myNewArr = [];
    for (var index = 0; index < myArr.length; index++) {
        var element = myArr[index];
        if (element % 2 == 0)
            myNewArr.push(element);
    }
    return myNewArr;
}
console.log(evenArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// другое решение
function evenArr_2(myArr) {
    var newArr = [];
    for (var i in myArr) {
        var elem = myArr[i];
        if (elem % 2 == 0)
            newArr.push(elem);
    }
    return newArr;
}
console.log(evenArr_2([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// 3
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-3\uD83D\uDE42");
// Функция принимает массив и возвращает сумму всех
// элементов массива.
function sumArr(myArr) {
    var sum = 0;
    for (var i in myArr) {
        sum = sum + myArr[i];
    }
    return sum;
}
console.log(sumArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// 4
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-4\uD83D\uDE42");
// Функция принимает массив и возвращает его максималь-
// ный элемент.
function maxElem(myArr) {
    var max = 0;
    for (var index = 0; index < myArr.length; index++) {
        var element = myArr[index];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
console.log(maxElem([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
//другое решение
function maxElem_2(myArr) {
    return Math.max.apply(Math, myArr);
}
console.log(maxElem_2([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
//другое решение
function arrayMax(myArr) {
    var len = myArr.length;
    var max = -Infinity;
    while (len--) {
        if (myArr[len] > max) {
            max = myArr[len];
        }
    }
    return max;
}
console.log(arrayMax([5555, 8, 91, 3]));
// 5
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-5\uD83D\uDE42");
// Функция добавления нового элемента в массив по ука-
// занному индексу.
function addElem(myArr, indexElem, elem) {
    if (indexElem > myArr.length || indexElem < 0)
        return "Bad index";
    myArr.splice(indexElem, 0, elem);
    return myArr;
}
console.log(addElem([1, 3, 4, 5, 6, 7, 8, 91, 2, 3], 1, 2));
console.log(addElem([1, 3, 4, 5, 6, 7, 8, 91, 2, 3], 8, 88));
//другое решение !NO
function addElem_2(arr, index, element) {
    arr[index] = element;
}
addElem_2([1, 3, 4, 5, 6, 7, 8, 91, 2, 3], 9, 999);
// 6
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-6\uD83D\uDE42");
// Функция удаления элемента из массива по указанному
// индексу.
var arr_2 = [1, 3, 4, 5, 6, 7, 8, 91, 2, 3];
function deleteElem(index) {
    arr_2.splice(index, 1);
}
deleteElem(1);
console.log(arr_2);
//Задание 2
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-2 \uD83D\uDE42");
/* Создать еще один массив из 5 случайных чисел и написать
следующие функции.*/
var myArr = [888, 9999, 3, 78, 91];
//1
console.log("1\uD83D\uDE42");
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.
function newArr(arr_1, arr_2) {
    var arr_3 = arr_1.concat(arr_2);
    var unique = Array.from(new Set(arr_3));
    return unique;
}
console.log(newArr(myArr, arr_2));
//2
console.log("2 \uD83D\uDE42");
// Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.
function newArr_2(arr_1, arr_2) {
    var intersection = arr_1.filter(function (num) { return arr_2.includes(num); });
    return intersection;
}
console.log(newArr_2(myArr, arr_2));
//3
console.log("3 \uD83D\uDE42");
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.
function newArr_3(arr_1, arr_2) {
    var difference = arr_1.filter(function (num) { return !arr_2.includes(num); });
    return difference;
}
console.log(newArr_3(myArr, arr_2));
// Задание 3
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-3 \uD83D\uDE42");
/*Создать массив фруктов и отсортировать его по алфавиту.
 Написать следующие функции.*/
//1
//Вывод на экран с помощью document.write() в виде списка
//(с помощью тегов ul и li).
//2
//Поиск фрукта в массиве. Функция принимает название
//фрукта и возвращает индекс найденного элемента или -1,
//если не найден. Поиск должен быть нерегистрозависимым.
var fruits = ["apple", "pinia", "potato", "orange", "melon", "tomato"];
fruits.sort();
console.log(fruits);
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    fruit = fruits_1[_i];
    console.log("<ul><li>" + fruit + "</li></ul>");
}
function searchFruit(fruit) {
    return fruits.indexOf(fruit) != -1;
}
console.log(searchFruit("orange"));
console.log(searchFruit("cucumber"));
