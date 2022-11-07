

const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given array :${array_numbers}`);

console.log("-----------------------------------------------------------------------------------");
console.log("Q.1 Find out all the numbers which are greater than 50 and log on console");
const newArray = array_numbers.filter((element) => {
return element > 50;
});
console.log(newArray);

console.log("-----------------------------------------------------------------------------------");
console.log("Q.2 Find out all the even numbers and log on console");
const arrayNew = array_numbers.filter((element) => {
return element %2 == 0;
});
console.log(arrayNew);

console.log("-----------------------------------------------------------------------------------");
console.log("Q.3 Find out all the odd numbers and log on console");
const array = array_numbers.filter((element) => {
    return element %2 !=0;
});
console.log(array);

console.log("-----------------------------------------------------------------------------------");
console.log("Q.4 Find out all the numbers which are multiple of 5");
const arrayMult = array_numbers.filter((element) => {
    return  element % 5 == 0;
});
console.log(arrayMult);

console.log("-----------------------------------------------------------------------------------");
console.log("Q.5 Find out all numbers which are between 20 and 50");
const arrayNumbers = array_numbers.filter((element) => {
return element > 20 && element < 50;
});
console.log(arrayNumbers);

