function calculator(num1, num2, operator) {
  let sum = 0;
  switch (operator) {
    case "multiply":
      sum = num1 * num2;
      break;
    case "divide":
      sum = num1 / num2;
      break;
    case "add":
      sum = num1 + num2;
      break;
    case "subtract":
      sum = num1 - num2;
      break;
  }
  console.log(sum);
}
calculator(5, 5, "multiply");
