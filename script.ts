// У нас есть следующий объект:
//Проверьте, что этот объект не пустой и что в нем есть ключ age.
let user = {
  name: "John",
  age: 30,
};
//1//
if (Object.entries(user).length !== 0 && "age" in user) {
  console.log(user.age);
} else {
  console.log("объект пустой");
}
//2//
if (typeof user.age !== "undefined" && user.hasOwnProperty("age")) {
  console.log(user.age);
} else {
  console.log("объект пустой");
}
//3//
if (JSON.stringify(user) == "{}") {
  console.log("пустой");
} else {
  console.log(user.age);
}
//4//
console.log(Object.hasOwn(user, "age"));
//true//
//5//
console.log(Object.keys(user) && "age" in user);
//true//

// Имеется массив объектов:
//Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.

let obj = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "Anna",
    age: 19,
  },
  {
    name: "Niko",
    age: 44,
  },
  {
    name: "Mike",
    age: 19,
  },
  {
    name: "Kri",
    age: 25,
  },
];

//1//
let aboutBob = {};
for (const user of obj) {
  if (user.name === "Bob") {
    Object.assign(aboutBob, user);
  }
}
console.log(aboutBob);

//2//
const bob = obj.find((user) => user.name === "Bob");
console.log(bob);

//3//
const bob1 = {};
obj.forEach((element) => {
  console.log(element);
  if (element.name === "Bob") {
    Object.assign(bob1, element);
  }
});
console.log(bob1);

//4//
const anyAdult = obj.some((person) => person.name === "Bob");
console.log(anyAdult); // true

//5//
const myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];

myArray.forEach((element, index, array) => {
  console.log(element); // 100, 200, 300
  console.log(index); // 0, 1, 2
  console.log(array); // same myArray object 3 times
});

// Удалите из массива объектов (задание 2) объект с name == "Anna".
//1//
const obj_2 = obj.filter((elem) => elem.name !== "Anna");
console.log(obj_2);

//2//
const index = obj.findIndex((item) => item.name === "Anna");
obj.splice(index, 1);
console.log(obj);

// Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.
//1//
obj.sort((a, b) => a.age - b.age);
console.log(obj);

//Получите из объекта obj значение id и разместите его в константу userId.
const obj_3 = {
  id: 5,
  token: 12343423,
};
//1//
const { id: userId } = obj_3;
console.log(userId);

//Получите список свойств объекта

const student = {
  name: "David Ray",
  sclass: "VI",
  rollno: 12,
};
//1//
for (let el in student) {
  console.log(el);
}
//удаления свойства rollno из следующего объекта.

delete student.rollno;
console.log(student);

//Получить длину объекта student.
//1//
const objsize = Object.keys(student).length;
console.log(objsize)
//2//
const objsize2 = Object.getOwnPropertyNames(student).length;
console.log(objsize2)