// // console.log(0b1111)
// let a = 'g'
// console.log(isNaN(''))
// console.log(isNaN('0'))
// console.log(isNaN('hyt'))
// console.log(isNaN('87'))
// console.log(isFinite(''))
// console.log(isFinite('0'))
// console.log(isFinite('hyt'))
// console.log(isFinite('87'))
// function sum(){
//     let a =prompt('a')
//     let b =prompt('b')
//     alert (+a + +b)
// }
// sum()
let a = function () {
  return Math.trunc(Math.random() * 4);
};
let b = [];
for (i = 0; i < 10000000; i++) {
  b[i] = a();
}

function count(arr) {
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 1;
  for (let num of arr) {
    if (num == 1) {
      one++;
    } else if (num == 2) {
      two++;
    } else if (num == 3) {
      three++;
    } else if (num == 4){
      four++;
    }
  }
  return (`${one} ,${two},${three}, ${four}`);
}
console.log(count(b));
console.log((b));

