console.log("-------------------------------------------------------");
const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(array_numbers);

console.log("------------------- 1. Total elements available ----------------------------------");
// Q 1. Find the total elements available or length and log on console
const totalElements = array_numbers.length;
console.log(totalElements);

console.log("------------------- 2. First and last elements -----------------------------------");
// Q 2. Log the first element and last element in array_numbers and log on console
const firstElement = array_numbers[0];
console.log(`First element: ${firstElement}`);
const lastElement = array_numbers[10];
console.log(`Last element: ${lastElement}`);

console.log("------------------- 3. thirst last element --------------------------------------");
// Q 3. Log the thirst last element using length property and log on console
const thirstElement = array_numbers[array_numbers.length-3];
console.log(thirstElement);

console.log("------------------- 4. all even numbers  ---------------------------------------");
// Q 4. Find the all even numbers and log on console
var res = "";
for (let index = 0; index < array_numbers.length; index++) {
    if (array_numbers[index]%2==0) 
    {
       res = res + " " + array_numbers[index]
    }
    
   } console.log(res);

   console.log("------------------- 5. all odd numbers  --------------------------------------");
// Q 5. Find the all odd numbers and log on console
var res = "";
for (let index = 0; index < array_numbers.length; index++) {
    if (array_numbers[index]%2!=0) 
    {
        res = res + " " + array_numbers[index]
    }
    
}
console.log(res);

console.log("------------------- 6. all even positioned elements  -----------------------------");
var result = " ";
for (let index = 0; index < array_numbers.length; index++)
 {
    if (index%2==0) {
        result = result + " " + array_numbers[index];
    }
    
}
console.log(result);

console.log("------------------- 7. all odd positioned elements -------------------------------");
var result = " ";
for (let index = 0; index < array_numbers.length; index++) 
{
   if (index%2!=0) 
   {
    result = result + " " + array_numbers[index];
   } 
    
}
console.log(result);

console.log("------------------- 8. sum of all elements  -------------------------------------");
var sum = 0;
for (let index = 0; index < array_numbers.length; index++)
 {
     sum = sum + array_numbers[index];
    
}
console.log(sum);

console.log("------------------- 9. multiple of 5  ---------------------------------------------");
// Q 9. Find the numbers which are multiple of 5
var mult= " ";
for (let index = 0; index < array_numbers.length;  index++) {
    if (array_numbers[index]%5==0)
     {
        mult = mult + " " + array_numbers[index];
    }
    
}
console.log(mult);

console.log("------------------- 10. Is number 115 available in given array ----------------------");
// Q 10. Is number 115 available in given array
let isAvailable =array_numbers.includes(115);
console.log(isAvailable);

console.log("------------------- 11. Is number 23 available in given array ------------------------");
// Q 11. Is number 23 available in given array
let numberIsAvailable =array_numbers.includes(23);
console.log(numberIsAvailable);

