//ЦИКЛЫ
console.log("\u0426\u0418\u041A\u041B\u042B\uD83D\uDE42");
//1
//Есть объект users в которм перечислен возраст участников. Напишите код, который выведет суммарный
//возраст всех участников. Решите задачу через цикл for...in.
var users = {
    John: 28,
    Mark: 30,
    David: 25,
    Richard: 42
};
var sum = 0;
for (var us in users) {
    sum += users[us];
}
console.log(sum);
