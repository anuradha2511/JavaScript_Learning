const array = [1, 6, 5, 3, 11, 23, 4, 5]
console.log("Given array ");
console.log(array);
console.log("------------------------------------------------------------------------");
console.log(" WAP to reverse the array");
array.reverse();
console.log(array);

console.log("------------------------------------------------------------------------");
console.log("WAP to remove duplicates elements");
let removeDuplicat = [...new Set(array)];
console.log(removeDuplicat);

console.log("------------------------------------------------------------------------");
let sum = 0;
for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
    console.log(sum);
    
}
console.log("------------------------------------------------------------------------");
array.sort((a, b) => {
    return (a<b ? 1 : -1)
});
console.log(array);
array
console.log("------------------------------------------------------------------------");
array.sort((a, b) => {
    return a > b ? 1: -1
});
console.log(array);