//MACCИВЫ
console.log("МАССИВЫ\u{1F642}");
/*Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.*/

// 1
console.log("Задание-1\u{1F642}");
// Функция принимает массив и выводит его на экран.

function showArr(myArr) {
  console.log(myArr);
}
showArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]);
// 2
console.log("Задание-2\u{1F642}");
// Функция принимает массив и выводит только четные
// элементы.
function evenArr(myArr) {
  const myNewArr = [];
  for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    if (element % 2 == 0) myNewArr.push(element);
    return myNewArr;
  }
}
console.log(evenArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// другое решение
function evenArr_2(myArr) {
  const newArr = [];
  for (i in myArr) {
    let elem = myArr[i];
    if (elem % 2 == 0) newArr.push(elem);
  }
  return newArr;
}
console.log(evenArr_2([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// 3
console.log("Задание-3\u{1F642}");
// Функция принимает массив и возвращает сумму всех
// элементов массива.
function sumArr(myArr) {
  let sum = 0;
  for (i in myArr) {
    let elem = myArr[i];
    sum = sum + elem;
  }
  return sum;
}
console.log(sumArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// 4
console.log("Задание-4\u{1F642}");
// Функция принимает массив и возвращает его максималь-
// ный элемент.
function maxElem(myArr) {
  let newArr = [];
  for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    if (element > newArr) {
      newArr = element;
    }
  }
  return newArr;
}
console.log(maxElem([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
//другое решение
function maxElem_2(myArr) {
  let max = Math.max(...myArr);
  return max;
}
console.log(maxElem_2([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
//другое решение
function arrayMax(myArr) {
  const len = myArr.length;
  const max = -Infinity;
  while (len--) {
    if (myArr[len] > max) {
      max = myArr[len];
    }
  }
  return max;
}
console.log(arrayMax([5555, 8, 91, 3]));
// 5
console.log("Задание-5\u{1F642}");
// Функция добавления нового элемента в массив по ука-
// занному индексу.
function addElem(indexElem, elem) {
  let myArr = [1, 3, 4, 5, 6, 7, 8, 91, 2, 3];
  myArr.splice(indexElem, 0, elem);

  return myArr;
}
console.log(addElem(15, 44));
console.log(addElem(22, 88));

//другое решение

const arr = [1, 3, 4, 5, 6, 7, 8, 91, 2, 3];
function addElem_2(index, element) {
  arr[index] = element;
}
addElem_2(99, 999);
console.log(arr);

// 6
console.log("Задание-6\u{1F642}");
// Функция удаления элемента из массива по указанному
// индексу.
const arr_2 = [1, 3, 4, 5, 6, 7, 8, 91, 2, 3];
function deleteElem(index) {
  delete arr_2[index];
}
deleteElem(1);
console.log(arr_2);

//Задание 2
/* Создать еще один массив из 5 случайных чисел и написать
следующие функции.*/
const myArr = [888, 9999, 3, 78, 11];
//1
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.
function newArr(arr_1, arr_2) {
  const arr_3 = arr_1.concat(arr_2);
  return arr_3;
}
console.log(newArr([4, 5, 6], [7, 6, 9]));

//2
// Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.

//3
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.


// Задание 3
/*Создать массив фруктов и отсортировать его по алфавиту.
Написать следующие функции.*/

//1
// Создать массив фруктов и отсортировать его по алфавиту.
// Написать следующие функции.

//2
// Поиск фрукта в массиве. Функция принимает название
// фрукта и возвращает индекс найденного элемента или -1,
// если не найден. Поиск должен быть нерегистрозависимым.
