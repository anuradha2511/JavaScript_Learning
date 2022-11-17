
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
// Q.1 Log the array element with its index using forEach() with arrow function
console.log("-------------------------------------------------------------------------------------");
console.log("Q.1 Log the array element with its index using forEach() with arrow function");
array_numbers.forEach((currentValue, index) => {
console.log(currentValue, index);
});

console.log("---------------------------------------------------------------------------------------");
console.log("Q.2 Find the positive numbers and log on console a) Using foeEach() with arrow function");
array_numbers.forEach((currentValue) => {
if (currentValue > 0) {
    console.log(currentValue);
}
});

console.log("---------------------------------------------------------------------------------------");
console.log("Q.3 Find the negative numbers and log on console ");
array_numbers.forEach((currentValue) => {
    if (currentValue < 0) {
        console.log(currentValue);
    }
});

console.log("---------------------------------------------------------------------------------------");
console.log("Q.4 Find the even numbers and log on console using forEach() with arrow function");
array_numbers.forEach((currentValue) => {
    if (currentValue%2==0) {
       console.log(currentValue); 
    }
});

console.log("---------------------------------------------------------------------------------------");
console.log("Q.5 Find the sum of all elements from array_numbers and log on sum value on console");
let sum = 0;
array_numbers.forEach((currentValue) => {
    sum = sum + currentValue;
});
console.log(sum);


console.log("---------------------------------------------------------------------------------------");
console.log("Q.6 Log the only even positioned array value on console. forEach() with arrow function ");
array_numbers.forEach((currentValue, index) => {
if (index%2==0 ) {
    console.log(currentValue, index);
}
});

console.log("---------------------------------------------------------------------------------------");
console.log("Q.7 Log the odd positioned array value on console if it is negative");
array_numbers.forEach((currentValue, index) => {
    if (index%2!=0 && currentValue <  0) {
        console.log(currentValue, index);
    }
});