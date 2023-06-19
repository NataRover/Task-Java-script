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
        return myNewArr;
    }
}
console.log(evenArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// другое решение
function evenArr_2(myArr) {
    var newArr = [];
    for (i in myArr) {
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
    for (i in myArr) {
        var elem = myArr[i];
        sum = sum + elem;
    }
    return sum;
}
console.log(sumArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// 4
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-4\uD83D\uDE42");
// Функция принимает массив и возвращает его максималь-
// ный элемент.
function maxElem(myArr) {
    var newArr = [];
    for (var index = 0; index < myArr.length; index++) {
        var element = myArr[index];
        if (element > newArr) {
            newArr = element;
        }
    }
    return newArr;
}
console.log(maxElem([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
//другое решение
function maxElem_2(myArr) {
    var max = Math.max.apply(Math, myArr);
    return max;
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
function addElem(indexElem, elem) {
    var myArr = [1, 3, 4, 5, 6, 7, 8, 91, 2, 3];
    myArr.splice(indexElem, 0, elem);
    return myArr;
}
console.log(addElem(15, 44));
console.log(addElem(22, 88));
//другое решение
var arr = [1, 3, 4, 5, 6, 7, 8, 91, 2, 3];
function addElem_2(index, element) {
    arr[index] = element;
}
addElem_2(99, 999);
console.log(arr);
// 6
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-6\uD83D\uDE42");
// Функция удаления элемента из массива по указанному
// индексу.
var arr_2 = [1, 3, 4, 5, 6, 7, 8, 91, 2, 3];
function deleteElem(index) {
    delete arr_2[index];
}
deleteElem(1);
console.log(arr_2);
//Задание 2
/* Создать еще один массив из 5 случайных чисел и написать
следующие функции.*/
var myArr = [888, 9999, 3, 78, 11];
//1
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.
function newArr(arr_1, arr_2) {
    var arr_3 = arr_1.concat(arr_2);
    return arr_3;
}
console.log(newArr([4, 5, 6], [7, 6, 9]));
