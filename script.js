function calc(a, b, operation) {
  // "+" = sum, "-" = sub, "*" = multi, "/" = div, "**" = exp, "%" = rem
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    a !== a ||
    b !== b ||
    operation == null
  ) {
    return "Error";
  }
  let result;

  switch (operation) {
    case "sum":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "multi":
      result = a * b;
      break;
    case "div":
      result = a / b;
      break;
    case "rem":
      result = a % b;
      break;
    case "exp":
      result = a ** b;
      break;
    case "rem":
      result = x % y;
      break;
    default:
      result = "unknown operation";
  }
  if (!(result >= 0 || result <= 0)) {
    return "Error";
  }
  return result;
}

console.log(calc(1, 0, "div"));
