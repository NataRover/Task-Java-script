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
    sclass: "VI",
    rollno: 12
};
//1//
for (var el in student) {
    console.log(el);
}
// ЗАДАНИЕ 7
//удаления свойства rollno из следующего объекта.
delete student.rollno;
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
//Напишите программу на JavaScript, чтобы получить объем цилиндра
//с четырьмя десятичными разрядами, используя классы объектов.
// Объем баллона : V = πr 2 ч
// где r - радиус, а h - высота цилиндра.
