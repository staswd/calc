// // let a = "вася";
// // function ucFirst(a) {
// //   let b = a[0].toUpperCase();
// //   for (i = 1; i < a.length; i++) {
// //     b += a[i];
// //   }
// //   return b;
// // }

// // console.log(ucFirst(a));
// // a='d'
// // console.log(a);

// // function checkSpam(str){
// //   return str.toLowerCase().includes('viagra')&&str.toUpperCase().includes('XXX')
// // }
// // console.log(checkSpam('buy ViAgRA xxxnow'))
// // console.log(checkSpam('free xxxxx'))
// // console.log(checkSpam("innocent rabbit"))

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 4) + "...";
//   } else {
//     return str;
//   }
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("dctv ghbdtn", 20));
// function extractCurrencyValue(str) {
//   return +str.slice(0);
// }
// console.log( extractCurrencyValue('$120') )

function showVerticalMessage(str) {
  let newStr = "";
  if (str[0] == "м") {
    newStr += str[0].toUpperCase() + "\n";
    for (char of str.slice(1,10)) {
      newStr += char + "\n";
    }
  } else {
    for (char of str.slice(0,10)) {
      newStr += char + "\n";
    }
  }
  return newStr;
  // for (char of str.slice(1)) {
  //   console.log(char + "\n");
  // }
}

console.log(showVerticalMessage("мараgchjctyjdtyфон"));
