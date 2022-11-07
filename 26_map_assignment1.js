const array_numbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(` Given array : ${array_numbers}`);

console.log("--------------------------------------------------------------------------------------");
console.log("Q.1 Add 10 into each element and log new array result on console using map()");
const newArray = array_numbers.map((element) => {
    return element + 10;
});
//console.log(` Given array : ${array_numbers}`);
console.log(newArray);

console.log("--------------------------------------------------------------------------------------");
console.log("Q.2 Square the each array element and log on console");
const array = array_numbers.map((element) => {
return element * element ;
});
//console.log(` Given array : ${array_numbers}`);
console.log(array);

console.log("--------------------------------------------------------------------------------------");
console.log("Q.3 Add the index value into its corresponding each array element and log on console");
const arrayNew = array_numbers.map((element, index) => {
    return element + index;
});
//console.log(` Given array : ${array_numbers}`);
console.log(arrayNew);
