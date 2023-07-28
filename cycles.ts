//ЦИКЛЫ
console.log("ЦИКЛЫ\u{1F642}");

//1
//Есть объект users в которм перечислен возраст участников. Напишите код, который выведет суммарный
//возраст всех участников. Решите задачу через цикл for...in.

const users = {
  John: 28,
  Mark: 30,
  David: 25,
  Richard: 42,
};
let sum = 0;
for (const us in users) {
  sum += users[us];
}
console.log(sum);
