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

let fruits = ["apple", "pinia", "potato", "orange", "melon", "tomato"];
fruits.sort();
console.log(fruits);
for (fruit of fruits) {
  console.log(`<ul><li>${fruit}</li></ul>`);
}
function searchFruit(fruit) {
  return fruits.indexOf(fruit.toLowerCase()) != -1;
}
console.log(searchFruit("Orange"));
console.log(searchFruit("cucumber"));
console.log(searchFruit("poTato"));

// Задание 4
console.log("Задание-4 \u{1F642}");

/*Создать массив «Список покупок». Каждый элемент массива
является объектом, который содержит название продукта, необ-
ходимое количество и куплен или нет. Написать несколько функ-
ций для работы с таким массивом.
1
Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.
2
Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необ-
ходимо увеличивать количество в существующей покупке,
а не добавлять новую.
3
Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.*/

const purchase = [
  {
    name: "a",
    count: 12,
    purchased: true,
  },
  {
    name: "b",
    count: 6,
    purchased: false,
  },
  {
    name: "c",
    count: 1,
    purchased: true,
  },
];

const addPurchaseButton = document.querySelector(".addPurchase");
const setPurchasedButton = document.querySelector(".setPurchased");

function whatToBuy(arr: any[]) {
  let n = 1;
  for (let el of arr) {
    if (!el.purchased) {
      console.log(`${n}. ${el.name} Надо купить ${el.count} штук`);
      n++;
      // console.log(n + ". " +el.name+" Надо купить "+el.cont+"штук")
    }
  }
  for (let el of arr) {
    if (el.purchased) {
      console.log(`${n}. ${el.name} Куплено ${el.count} штук`);
      n++;
      // console.log(n + ". " +el.name+" Надо купить "+el.cont+"штук")
    }
  }
}

function addPurchase() {
  const name = prompt("Введите название") as string;
  const count = +(prompt("Введите количество") as string);
  let find = false;
  for (let el of purchase) {
    if (el.name == name) {
      el.count += count;
      find = true;
    }
  }
  if (!find) {
    purchase.push({ name: name, count, purchased: false });
  }
  whatToBuy(purchase);
}

function setPurchased() {
  const name = prompt("Введите название купленного товара") as string;
  for (let el of purchase) {
    if (el.name == name) {
      el.purchased = true;
    }
  }
  whatToBuy(purchase);
}

addPurchaseButton?.addEventListener("click", addPurchase);
setPurchasedButton?.addEventListener("click", setPurchased);

whatToBuy(purchase);

// Задание 5
console.log("Задание-5 \u{1F642}");
/*Создать массив, описывающий чек в магазине. Каждый эле-
мент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
1
Распечатка чека на экран.
2
Подсчет общей суммы покупки.
3
Получение самой дорогой покупки в чеке.
4
Подсчет средней стоимости одного товара в чеке.*/

const cheque = [
  {
    name: "a",
    count: 1,
    price: 10,
  },
  {
    name: "b",
    count: 2,
    price: 20,
  },
  {
    name: "c",
    count: 3,
    price: 30,
  },
  {
    name: "d",
    count: 1,
    price: 40,
  },
  {
    name: "r",
    count: 3,
    price: 50,
  },
  {
    name: "f",
    count: 2,
    price: 60,
  },
];

function showCheque(product) {
  let sumCheq = 0;
  let sumProduct = 0;
  let maxCheq = 0;
  for (let index = 0; index < product.length; index++) {
    const element = product[index];
    sumProduct = element.price * element.count;
    sumCheq = sumCheq + sumProduct;
    console.log(
      `<ul><li>${element.name}.......${element.count}X${element.price}...sum:${sumProduct}</li></ul>`
    );
    if (sumProduct > maxCheq) {
      maxCheq = sumProduct;
    }
  }
  console.log(maxCheq);
  // let maxCheq = Math.max(product.element);
  console.log(`Общая сумма ваших покупок ${sumCheq}`);
}
showCheque(cheque);

// Задание 6
console.log("Задание-6 \u{1F642}");
/*Создать массив css-стилей (цвет, размер шрифта, выравнива-
ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
ект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми сти-
лями, перечисленными в массиве.*/

// const colorRed = [
//   {
//     name: "color",
//     value: "red",
//   },
//   {
//     name: "text-decoration",
//     value: "underline",
//   },
// ];
// const colorGreen = [
//   {
//     name: "color",
//     value: "green",
//   },
//   {
//     name: "font-size",
//     value: "20px",
//   },
// ];

// const printTextDiv = document.querySelector(".printText");

// function printText(styleArr: Record<string, string>[], text: string) {
//   let styleStr = "";
//   for (let el of styleArr) {
//     styleStr += `${el.name}:${el.value};`;
//   }
//   if (printTextDiv) {
//     printTextDiv.innerHTML += `<p style="${styleStr}">${text}</p>`;
//   }
// }

// printText(colorRed, "dfjkghjkdfgjhkdfgjkndfjkgnjkn sfgmlkdfnjglknjdflk");
// printText(colorGreen, "dfjkghjkdfgjhkdfgjkndfjkgnjkn sfgmlkdfnjglknjdflk");

// Задание 7
console.log("Задание-7 \u{1F642}");
/*Создать массив аудиторий академии. Объект-аудитория со-
стоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним.
1
Вывод на экран всех аудиторий.
2
Вывод на экран аудиторий для указанного факультета.
3
Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
количества студентов и названия факультета.
4
Функция сортировки аудиторий по количеству мест.
5
Функция сортировки аудиторий по названию (по алфа-
виту).*/

// Задание 8
console.log("Задание-8 \u{1F642}");
// Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

// function oneNumber(n: number) {
//   switch (n) {
//     case 0:
//       return "ноль";
//     case 1:
//       return "один";
//     case 2:
//       return "два";
//     case 3:
//       return "три";
//     case 4:
//       return "четыре";
//     case 5:
//       return "пять";
//     case 6:
//       return "шесть";
//     case 7:
//       return "семь";
//     case 8:
//       return "восемь";
//     case 9:
//       return "девять";
//   }
// }

// function secondOfTen(n: number) {
//   switch (n) {
//     case 0:
//       return "десять";
//     case 1:
//       return "одиннадцать";
//     case 2:
//       return "двенадцать";
//     case 3:
//       return "тринадцать";
//     case 4:
//       return "четырнадцать";
//     case 5:
//       return "пятьнадцать";
//     case 6:
//       return "шестьнадцать";
//     case 7:
//       return "семьнадцать";
//     case 8:
//       return "восемьнадцать";
//     case 9:
//       return "девятьнадцать";
//   }
// }

// function firstOfMoreTen(n: number) {
//   switch (n) {
//     case 2:
//       return "двадцать";
//     case 3:
//       return "тридцать";
//     case 4:
//       return "сорок";
//     case 5:
//       return "пятьдесят";
//     case 6:
//       return "шестьдесят";
//     case 7:
//       return "семьдесят";
//     case 8:
//       return "восемьдесят";
//     case 9:
//       return "девяносто";
//   }
// }

// function numberToText(n: number) {
//   if (n < -99 || n > 99) return "Неверное число";
//   let minusStr = "";
//   let sN = "";
//   const numberWithMinus = n.toString();
//   if (numberWithMinus[0] == "-") {
//     minusStr = "минус ";
//     sN = numberWithMinus.slice(1);
//   } else {
//     sN = n.toString();
//   }

//   if (sN.length == 1) {
//     return minusStr + oneNumber(+sN[0]);
//   }
//   if (sN.length == 2) {
//     if (sN[0] == "1") {
//       return minusStr + secondOfTen(+sN[1]);
//     }
//     if (sN[1] == "0") {
//       return minusStr + firstOfMoreTen(+sN[0]);
//     }
//     return minusStr + firstOfMoreTen(+sN[0]) + " " + oneNumber(+sN[1]);
//   }
// }

// alert(numberToText(+(prompt("введите двузначное число") as string)));

// console.log(numberToText(18));
// console.log(numberToText(0));
// console.log(numberToText(9));
// console.log(numberToText(34));
// console.log(numberToText(68));
