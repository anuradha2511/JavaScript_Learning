const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(array_roll_numbers);
console.log("--------------------------------------------------------------------------------------------------");
console.log("Q.1 Reverse the array");
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log("--------------------------------------------------------------------------------------------------");
console.log("Q.2 Use the sort() method as it is without any custom sorting logic (Without passing any arguments");
// array_roll_numbers.sort(( ) => {
//     return a> b ? 1: -1;
// });
// console.log(array_roll_numbers);

console.log("--------------------------------------------------------------------------------------------------");
console.log("Q.3 Sort the array in ascending order");
array_roll_numbers.sort(( first, second) => {
    return first > second ? 1 : -1; 
});
console.log(array_roll_numbers);

console.log("--------------------------------------------------------------------------------------------------");
console.log("Q.4 Sort the array in descending order without using reverse() method only use sort() ");
array_roll_numbers.sort((first, second) => {
    return first > second ? -1 : 1;
});
console.log(array_roll_numbers);

console.log("--------------------------------------------------------------------------------------------------");
console.log("Q.5 Sort the array in descending order with using reverse() method only use sort() ");
array_roll_numbers.sort((first, second) => {
    return first > second ? -1 : 1;
    
});
console.log(array_roll_numbers);
console.log(array_roll_numbers.reverse());

console.log("--------------------------------------------------------------------------------------------------");
console.log("Q.6 Find the greatest number from the array ");
largest = 0;
  array_roll_numbers.forEach((element) => {
    if (largest < element) {
     largest = element;
    }
});
console.log(largest);

console.log("--------------------------------------------------------------------------------------------------");
console.log("Q.6 Find the smallest number from the array ");
smallest = 0;
array_roll_numbers.forEach((element) => {
    if (smallest > element) {
        smallest = element;
    }
});
console.log(smallest);

console.log("--------------------------------------------------------------------------------------------------");
console.log("Q.7 Remove duplicates from array ");
console.log(`Original Array : ${array_roll_numbers}`);
let removeDuplicateNum = [...new Set(array_roll_numbers)];
console.log(`Remove Duplicates : ${removeDuplicateNum}`);


