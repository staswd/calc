// function calc(a, b, operation) {
//   // "+" = sum, "-" = sub, "*" = multi, "/" = div, "**" = exp, "%" = rem
//   if (
//     typeof a != "number" ||
//     typeof b != "number" ||
//     a !== a ||
//     b !== b ||
//     operation == null
//   ) {
//     return "Error";
//   }
//   let result;

//   switch (operation) {
//     case "sum":
//       result = a + b;
//       break;
//     case "sub":
//       result = a - b;
//       break;
//     case "multi":
//       result = a * b;
//       break;
//     case "div":
//       result = a / b;
//       break;
//     case "rem":
//       result = a % b;
//       break;
//     case "exp":
//       result = a ** b;
//       break;
//     case "rem":
//       result = x % y;
//       break;
//     default:
//       result = "unknown operation";
//   }
//   if (!(result >= 0 || result <= 0)) {
//     return "Error";
//   }
//   return result;
// }

// console.log(calc(1, 0, "div"));
function calc(operator, a, b) {
  let operations = {
    sum: a + b,
    sub: a - b,
    multi: a * b,
    div: a / b,
    rem: a % b,
    exp: a ** b,   
  };
  let isValidInput =
    typeof a == "number" && a === a && typeof b == "number" && b === b;
  if (!isValidInput) {
    console.log("error");
  } else if (!operations[operator]) {
    console.log("unknown operator");
  } else {
    console.log(operations[operator]);
  }
}
calc("div", 6, 0);

