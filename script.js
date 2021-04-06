// let name = prompt('Vvedite imya');
// alert(name);

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
//
// alert(a + b); // 1

// for (let i = 2; i <=10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// let num;
//
// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);


// let n = prompt('Vvedite chislo', 0);
//
// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...
//
//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }
//
//   console.log( i ); // простое число
// }

//
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
//
// checkAge(20);

// function min(a,b) {
//   if (a < b) {
//     return a;
//   }
//   else {
//     return b;
//   }
// }
//
// console.log(min(3, -1));


// function pow(a,b) {
//   let res = a;
//
//   for (let i = 1; i < b; i++) {
//     res *= a;
//   }
//   return res;
// }
//
// console.log(pow(3, 2));

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
//
// let schedule = {};
// schedule["8:30"] = "get up";
//
// console.log( isEmpty(schedule) );


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
//
// let sum = 0;
//
// for (let i of Object.values(salaries)) {
//   sum += i;
// }
//
// console.log(sum);


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     if (typeof  obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
//   console.log(obj);
// }
//
// multiplyNumeric(menu);
