// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
// let styles=['Джаз','Блюз']
// styles.push('Рок-н-ролл')
// console.log(styles)
// let middle=Math.round(styles.length/2)-1
// styles[middle]='Классика'
// console.log(styles)
// console.log(styles.shift())
// console.log(styles)
// styles.unshift('Рэп','Регги')
// console.log(styles)
// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// })

// arr[2]();
// function sumInput() {
//   let arr = [];
//   for (i = 0; ; i++) {
//     arr[i] = prompt();
//     if ((typeof +arr[i] != "number" )||( +arr[i] != +arr[i])||(arr[i]==null)||arr[i]=='') {
//       arr.pop();
//       break;
//     }
//   }
//   console.log(arr)
//   let sum = 0;
//   for (let num of arr) {
//     sum += +num;
//   }
//   console.log(sum)
//   sum = sum / arr.length;
//   return sum;
// }
// arr = sumInput();
// console.log(arr);
// function camelize(str) {
//   let arr = str.split("-");

//   for (i = 1; i < arr.length; i++) {
//     arr2 = arr[i].split("");

//     arr2.unshift(arr2.shift().toUpperCase());
//     arr2.join("");
//     arr[i] = arr2.join("");
//   }
//   str = arr.join("");
//   console.log (str);
// }

// function camelize(str) {
//   console.log(
//     str
//       .split("-")
//       .map((word, index) =>
//         index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join("")
//   );
// }

// camelize("list-style-image-boom");
// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// let arr = [5, 3, 8, 1];
// filterRange=(arrr, num1,num2)=>arr=arrr.filter(item=>item>=num1&&item<=num2)

// filterRange(arr, 1, 4);

// // console.log( filtered ); // 3,1 (совпадающие значения)

// console.log( arr );

// let arr = [5, 2, 1, -10, 8];
// function compareNumeric(a, b) {
//     return b-a
// }
// arr.sort(compareNumeric)

// console.log( arr );

// let arr = ["HTML", "JavaScript", "CSS"];
// copySorted=(arr)=> arr.slice().sort()

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr );
// function calculate(str){

//       str2= str.split(' ')
//       return str2
// }
// console.log( calculate("3 + 7") )
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)/* ... ваш код */

// console.log( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// function full(a) {
//     let b = {};
//     b.fullname = a.name + ' ' + a.surname;
//   b.id=a.id
//   return b}
// let usersMapped =users.map(full)

// console.log( usersMapped) // 1
// // console.log( usersMapped[0].fullname )
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

//    function sortByAge(arr){ arr.sort((a,b)=>a.age-b.age)}

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr)

// let arr = [1, 2, 3];
// function shuffle(arr){
//     let n=arr.length
// function random(n){
//     return Math.ceil(Math.random()*n)
// }
// arr2=arr.slice()
// arr[0]=arr2.splice(random,1)
// }

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// console.log (arr)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];
// function getAverageAge(arr){
//   return  arr.reduce((sum, current) => sum + current.age, 0)

// }

// console.log( getAverageAge(arr) )
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(arr) {
  let result = [];
  for (str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

console.log(unique(strings));
