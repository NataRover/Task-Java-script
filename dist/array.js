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
    return fruits.indexOf(fruit.toLowerCase()) != -1;
}
console.log(searchFruit("Orange"));
console.log(searchFruit("cucumber"));
console.log(searchFruit("poTato"));
// Задание 4
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-4 \uD83D\uDE42");
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
var purchase = [
    {
        name: "a",
        count: 12,
        purchased: true
    },
    {
        name: "b",
        count: 6,
        purchased: false
    },
    {
        name: "c",
        count: 1,
        purchased: true
    },
];
var addPurchaseButton = document.querySelector(".addPurchase");
var setPurchasedButton = document.querySelector(".setPurchased");
function whatToBuy(arr) {
    var n = 1;
    for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
        var el = arr_4[_i];
        if (!el.purchased) {
            console.log(n + ". " + el.name + " \u041D\u0430\u0434\u043E \u043A\u0443\u043F\u0438\u0442\u044C " + el.count + " \u0448\u0442\u0443\u043A");
            n++;
            // console.log(n + ". " +el.name+" Надо купить "+el.cont+"штук")
        }
    }
    for (var _a = 0, arr_5 = arr; _a < arr_5.length; _a++) {
        var el = arr_5[_a];
        if (el.purchased) {
            console.log(n + ". " + el.name + " \u041A\u0443\u043F\u043B\u0435\u043D\u043E " + el.count + " \u0448\u0442\u0443\u043A");
            n++;
            // console.log(n + ". " +el.name+" Надо купить "+el.cont+"штук")
        }
    }
}
function addPurchase() {
    var name = prompt("Введите название");
    var count = +prompt("Введите количество");
    var find = false;
    for (var _i = 0, purchase_1 = purchase; _i < purchase_1.length; _i++) {
        var el = purchase_1[_i];
        if (el.name == name) {
            el.count += count;
            find = true;
        }
    }
    if (!find) {
        purchase.push({ name: name, count: count, purchased: false });
    }
    whatToBuy(purchase);
}
function setPurchased() {
    var name = prompt("Введите название купленного товара");
    for (var _i = 0, purchase_2 = purchase; _i < purchase_2.length; _i++) {
        var el = purchase_2[_i];
        if (el.name == name) {
            el.purchased = true;
        }
    }
    whatToBuy(purchase);
}
addPurchaseButton === null || addPurchaseButton === void 0 ? void 0 : addPurchaseButton.addEventListener("click", addPurchase);
setPurchasedButton === null || setPurchasedButton === void 0 ? void 0 : setPurchasedButton.addEventListener("click", setPurchased);
whatToBuy(purchase);
// Задание 5
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-5 \uD83D\uDE42");
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
var cheque = [
    {
        name: "a",
        count: 1,
        price: 10
    },
    {
        name: "b",
        count: 2,
        price: 20
    },
    {
        name: "c",
        count: 3,
        price: 30
    },
    {
        name: "d",
        count: 1,
        price: 40
    },
    {
        name: "r",
        count: 3,
        price: 50
    },
    {
        name: "f",
        count: 2,
        price: 60
    },
];
function showCheque(product) {
    var sumCheq = 0;
    var sumProduct = 0;
    var maxCheq = 0;
    for (var index = 0; index < product.length; index++) {
        var element = product[index];
        sumProduct = element.price * element.count;
        sumCheq = sumCheq + sumProduct;
        console.log("<ul><li>" + element.name + "......." + element.count + "X" + element.price + "...sum:" + sumProduct + "</li></ul>");
        if (sumProduct > maxCheq) {
            maxCheq = sumProduct;
        }
    }
    console.log("\u0421\u0430\u043C\u0430\u044F \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u0432 \u0447\u0435\u043A\u0435 " + maxCheq);
    console.log("\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0432\u0430\u0448\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A " + sumCheq);
}
showCheque(cheque);
// Задание 6
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-6 \uD83D\uDE42");
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
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-7 \uD83D\uDE42");
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
var academy = [
    //аудитория
    {
        name: "22",
        places: "15",
        faculty: "web-developer"
    },
    //аудитория
    {
        name: "23",
        places: "12",
        faculty: "web-designer"
    },
    //аудитория
    {
        name: "29",
        places: "5",
        faculty: "web-designer"
    },
    {
        name: "10",
        places: "11",
        faculty: "web-designer"
    },
    {
        name: "20",
        places: "15",
        faculty: "Languages"
    },
    {
        name: "26",
        places: "14",
        faculty: "Languages"
    },
    {
        name: "33",
        places: "18",
        faculty: "Languages"
    },
];
//вывод на экран всех аудиторий
function showAcademy(classRoom) {
    for (var index = 0; index < classRoom.length; index++) {
        var element = classRoom[index];
        console.log("<li>\u0433\u0440\u0443\u043F\u043F\u0430: " + element.name + ", \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442: " + element.faculty + ", \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0435\u0441\u0442: " + element.places + "</li>");
    }
}
showAcademy(academy);
//Вывод на экран аудиторий для указанного факультета.
function showFacultyRooms(obj, faculty) {
    var facultyRooms = [];
    for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
        var elem = obj_1[_i];
        if (elem.faculty.toLowerCase() === faculty.toLowerCase()) {
            facultyRooms.push(elem.name);
        }
    }
    return "\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \"" + faculty + "\" \u0433\u0440\u0443\u043F\u043F\u0430: " + facultyRooms + ".";
}
console.log(showFacultyRooms(academy, "lanGuages"));
console.log(showFacultyRooms(academy, "web-Designer"));
//Вывод на экран только тех аудиторий, которые подходят для
//переданной группы. Объект-группа состоит из названия,
//количества студентов и названия факультета.
function showAuditory(obj, groupName) {
    var groupRooms = [];
    for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
        var elem = obj_2[_i];
        if (elem.groupName === groupName) {
            groupRooms.push(elem.);
        }
    }
    return "\u0413\u0440\u0443\u043F\u043F\u0430 " + groupName + " - " + groupRooms;
}
console.log(academy, 22);
//Функция сортировки аудиторий по количеству мест.
function arrSortPlace(audit) {
    audit.sort(function (a, b) { return a.places - b.places; });
    return audit;
}
console.log(arrSortPlace(academy));
//Функция сортировки аудиторий по названию (по алфавиту)
function arrSortName(audit) {
    audit.sort(function (a, b) { return a.faculty - b.faculty; });
    return audit;
}
console.log(arrSortName(academy));
// Задание 8
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435-8 \uD83D\uDE42");
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
