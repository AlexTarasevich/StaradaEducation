const sum = (a, b) => a + b;
const substract = (a, b) => a - b;
const multi = (a, b) => a * b;
const division = (a, b) => a / b;

const calculate = (operation, a, b) => operation(a, b);

console.log(calculate(sum, 7, 5))
console.log(calculate(multi, 7, 5))
console.log(calculate(substract, 7, 5))
console.log(calculate(division, 7, 5))