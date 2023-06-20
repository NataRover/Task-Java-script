// const my_num = prompt();
// function evenOdd() {
//   const arr = ["Четное", "Не четное"]
//   return arr[(my_num * my_num) % 2]
//   return my_num % 2 && 'odd' || 'even'
// }
// alert(evenOdd());

//MACCИВЫ
console.log("МАССИВЫ\u{1F642}");
/*Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.*/

// 1
console.log("Задание-1\u{1F642}");
// Функция принимает массив и выводит его на экран.

function showArr(myArr: any[]) {
  console.log(myArr);
}
showArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]);
// 2
console.log("Задание-2\u{1F642}");
// Функция принимает массив и выводит только четные
// элементы.
function evenArr(myArr: any[]) {
  const myNewArr = [] as any[];
  for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    if (element % 2 == 0) myNewArr.push(element);
  }
  return myNewArr;
}

console.log(evenArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// другое решение
function evenArr_2(myArr) {
  const newArr = [] as any[];
  for (let i in myArr) {
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
  for (let i in myArr) {
    sum = sum + myArr[i];
  }
  return sum;
}
console.log(sumArr([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
// 4
console.log("Задание-4\u{1F642}");
// Функция принимает массив и возвращает его максималь-
// ный элемент.
function maxElem(myArr) {
  let max = 0;
  for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    if (element > max) {
      max = element;
    }
  }
  return max;
}
console.log(maxElem([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
//другое решение
function maxElem_2(myArr) {
  return Math.max(...myArr);
}
console.log(maxElem_2([1, 3, 4, 5, 6, 7, 8, 91, 2, 3]));
//другое решение
function arrayMax(myArr) {
  let len = myArr.length;
  let max = -Infinity;
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
function addElem(myArr, indexElem, elem) {
  if (indexElem > myArr.length || indexElem < 0) return "Bad index";
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
console.log("Задание-6\u{1F642}");
// Функция удаления элемента из массива по указанному
// индексу.
const arr_2 = [1, 3, 4, 5, 6, 7, 8, 91, 2, 3];
function deleteElem(index) {
  arr_2.splice(index, 1);
}
deleteElem(1);
console.log(arr_2);

//Задание 2
console.log("Задание-2 \u{1F642}");
/* Создать еще один массив из 5 случайных чисел и написать
следующие функции.*/
const myArr = [888, 9999, 3, 78, 91];
//1
console.log("1\u{1F642}");
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.
function newArr(arr_1, arr_2) {
  let arr_3 = arr_1.concat(arr_2);
  let unique = Array.from(new Set(arr_3));
  return unique;
}
console.log(newArr(myArr, arr_2));

//2
console.log("2 \u{1F642}");
// Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.
function newArr_2(arr_1, arr_2) {
  let intersection = arr_1.filter((num) => arr_2.includes(num));
  return intersection;
}
console.log(newArr_2(myArr, arr_2));

//3
console.log("3 \u{1F642}");
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.

function newArr_3(arr_1, arr_2) {
  let difference = arr_1.filter((num) => !arr_2.includes(num));
  return difference;
}
console.log(newArr_3(myArr, arr_2));

// Задание 3
console.log("Задание-3 \u{1F642}");

/*Создать массив фруктов и отсортировать его по алфавиту.
 Написать следующие функции.*/

//1
//Вывод на экран с помощью document.write() в виде списка
//(с помощью тегов ul и li).

//2
//Поиск фрукта в массиве. Функция принимает название
//фрукта и возвращает индекс найденного элемента или -1,
//если не найден. Поиск должен быть нерегистрозависимым.

let fruits = ["apple", "pinia", "potato", "orange", "meelon", "tomato"];
fruits.sort();
console.log(fruits);
for (fruit of fruits) {
  console.log(`<ul><li>${fruit}</li></ul>`);
}
