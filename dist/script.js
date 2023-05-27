// ЗАДАНИЕ 1
//У нас есть следующий объект:
//Проверьте, что этот объект не пустой и что в нем есть ключ age.
var user = {
    name: "John",
    age: 30
};
//1//
if (Object.entries(user).length !== 0 && "age" in user) {
    console.log(user.age);
}
else {
    console.log("объект пустой");
}
//2//
if (typeof user.age !== "undefined" && user.hasOwnProperty("age")) {
    console.log(user.age);
}
else {
    console.log("объект пустой");
}
//3//
if (JSON.stringify(user) == "{}") {
    console.log("пустой");
}
else {
    console.log(user.age);
}
//4//
console.log(Object.hasOwn(user, "age"));
//true//
//5//
console.log(Object.keys(user) && "age" in user);
//true//
//6//
//проверка на пустой объект
function isEmpty(user) {
    for (var key in user) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}
console.log(isEmpty(user));

// ЗАДАНИЕ 2
// Имеется массив объектов:
//Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
var obj = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Anna",
        age: 19
    },
    {
        name: "Niko",
        age: 44
    },
    {
        name: "Mike",
        age: 19
    },
    {
        name: "Kri",
        age: 25
    },
];
//1//
var aboutBob = {};
for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
    var user_1 = obj_1[_i];
    if (user_1.name === "Bob") {
        Object.assign(aboutBob, user_1);
    }
}
console.log(aboutBob);
//2//
var bob = obj.find(function (user) { return user.name === "Bob"; });
console.log(bob);
//3//
var bob1 = {};
obj.forEach(function (element) {
    console.log(element);
    if (element.name === "Bob") {
        Object.assign(bob1, element);
    }
});
console.log(bob1);
//4//
var anyAdult = obj.some(function (person) { return person.name === "Bob"; });
console.log(anyAdult); // true
//5//
var myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];
myArray.forEach(function (element, index, array) {
    console.log(element); // 100, 200, 300
    console.log(index); // 0, 1, 2
    console.log(array); // same myArray object 3 times
});
// ЗАДАНИЕ 3
// Удалите из массива объектов (задание 2) объект с name == "Anna".
//1//
var obj_2 = obj.filter(function (elem) { return elem.name !== "Anna"; });
console.log(obj_2);
//2//
var index = obj.findIndex(function (item) { return item.name === "Anna"; });
obj.splice(index, 1);
console.log(obj);
// ЗАДАНИЕ 4
// Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.
//1//
obj.sort(function (a, b) { return a.age - b.age; });
console.log(obj);
// ЗАДАНИЕ 5
//Получите из объекта obj значение id и разместите его в константу userId.
var obj_3 = {
    id: 5,
    token: 12343423
};
//1//
var userId = obj_3.id;
console.log(userId);
// ЗАДАНИЕ 6
//Получите список свойств объекта
var student = {
    name: "David Ray",
    "class": "VI",
    age: 16
};
//1//
for (var el in student) {
    console.log(el);
}
// ЗАДАНИЕ 7
//удаления свойства age из следующего объекта.
delete student.age;
console.log(student);
// ЗАДАНИЕ 8
//Получить длину объекта student.
//1//
var objsize = Object.keys(student).length;
console.log(objsize);
//2//
var objsize2 = Object.getOwnPropertyNames(student).length;
console.log(objsize2);
// ЗАДАНИЕ 9
//Напишите программу на JavaScript для отображения статуса
//чтения (то есть отображения названия книги, имени автора и статуса чтения) следующих книг.
var library = [
    {
        title: "Bill Gates",
        author: "The Road Ahead",
        readingStatus: true
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: false
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false
    },
    {
        title: "Blood diamond",
        author: "Эдвард Цвик",
        readingStatus: true
    },
    {
        title: "Mandalorian",
        author: "Джон Фавро",
        readingStatus: true
    },
];
//1//
for (var index_1 = 0; index_1 < library.length; index_1++) {
    var element = library[index_1];
    var book = "'" + element.title + "'" + " " + element.author + "-";
    if (element.readingStatus) {
        console.log(book + " \u043A\u043D\u0438\u0433\u0430 \u043F\u0440\u043E\u0447te\u043D\u0430");
    }
    else {
        console.log(book + " \u043A\u043D\u0438\u0433\u0443 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0447\u0435\u0441\u0442\u044C");
    }
}
// ЗАДАНИЕ 10
//Смысл задачи: если значение объекта является числом (number),
//то его значение надо увеличить вдвое.
var menu = {
    width: 200,
    height: 300,
    title: "my menu"
};
//1//
for (var _a = 0, _b = Object.values(menu); _a < _b.length; _a++) {
    var value = _b[_a];
    if (typeof value == "number") {
        value = value * 2;
        console.log(value);
    }
}
//2//
for (var elem in menu) {
    if (typeof menu[elem] == "number") {
        menu[elem] *= 2;
    }
}
console.log(menu);
//3//
//ЗАДАЧА 11//
// 1. Есть три объекта (три автомобиля): first_Car, second_Car и third_Car.
// 2. Каждый из объектов (автомобилей) имеет набор свойств и соответствующих им значений (характеристики автомобиля).
// 3. Рассмотрим один из объектов:
// var first_Car = {
// make: "VAZ", /* производитель */
// model: 2106, /* модель */
// year: 1980, /* год выпуска */
// color: "beige", /* цвет */
// passengers: 5, /* число пассажиров */
// convertible: false, /* откидной верх */
// mileage: 80000 /* пробег */
// }
// - свойства make и color имеют строковые значения;
// - свойства model, year, passengers и mileage - числовые значения;
// - свойство convertible принимает булево значение.
// Нужно сделать следующее:
// Написать функцию, которая проверяет автомобиль по двум параметрам (год выпуска и пробег)
// и возвращает булево значение true или false.
// Подробности:
// 1. Функция имеет один параметр car, в качестве которого получает один из 3-х объектов.
//Например, выше рассмотренный автомобиль first_Car.
// 2. Функция должна работать с любым подобным объектом.
//1//
/* 1-ый объект */
var first_Car = {
    make: "VAZ" /* производитель */,
    model: 2106 /* модель */,
    year: 1980 /* год выпуска */,
    color: "beige" /* цвет */,
    passengers: 5 /* число пассажиров */,
    convertible: false /* откидной верх */,
    mileage: 80000 /* пробег */
};
/* 2-ой объект */
var second_Car = {
    make: "VW",
    model: "Passat b3",
    year: 1990,
    color: "neptune",
    passengers: 5,
    convertible: false,
    mileage: 160000
};
/* 3-ий объект */
var third_Car = {
    make: "Hyundai",
    model: "Solaris",
    year: 2012,
    color: "wet asphalt",
    passengers: 5,
    convertible: false,
    mileage: 15000
};
/* Функция для проверки объекта */
function good_Car(car) {
    if (car.year < 2000) {
        return false;
    }
    else if (car.mileage > 50000) {
        return false;
    }
    else {
        return true;
    }
}
/* Заносим результат работы функции good_Car и Анализ результата в еще одну функцию */
function itog(car) {
    var result = good_Car(car);
    if (result) {
        console.log("У Вас неплохой автомобиль: " +
            car.year +
            " год выпуска, с пробегом " +
            car.mileage +
            " км.");
    }
    else {
        console.log("Не будем говорить о Вашем автомобиле....");
    }
}
console.log(itog(second_Car));
