
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(" Q.1 Find the sum of all numbers");
let sum = array_numbers.reduce((value, total) => {
    return value + total;
});
console.log(sum);

console.log("----------------------------------------------------------------------");
console.log("Q.2 Find the sum of all even numbers");
let evenNumber = array_numbers.filter((value) => {
    return value%2==0;
});
console.log(evenNumber);

let sumEven = evenNumber.reduce((value, total) => {
    return value + total;
});
console.log(sumEven);