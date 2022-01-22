function calc(operation, a, b) {
  // "+" = sum, "-" = sub, "*" = multi, "/" = div, "**" = exp, "%" = rem
  if (
    !(a >= 0 || a <= 0 || b >= 0 || b <= 0) ||
    (Boolean(a) == 0 && a !== 0) ||
    (Boolean(b) == 0 && b !== 0) ||
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

console.log(calc("div", 1, 0));
