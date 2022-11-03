console.log("------------------------- a.  Given array ------------------------------------------");
const arrayOfNumbers = ["Kamat", "Memon", "Nashpati", "Taimur", "Menon", "Kamat", "Andy", "Taimur"];
console.log(arrayOfNumbers);

console.log("----------------------- b. Remove Duplicate names ----------------------------------");
// b. From the given array remove the duplicate names and the array on console after removing duplicate elements
const arrayOfDuplicateElements = [...new Set(arrayOfNumbers)];
console.log(arrayOfDuplicateElements);

console.log("----------------------- c. Count Remove Duplicate elements--------------------------");
// c. Find out the count how many duplicate elements are removed from the arrayOf numbers
const duplicateElements = arrayOfNumbers.length - arrayOfDuplicateElements.length;
console.log(duplicateElements);

console.log("----------------------- d. total number (count) unique elements -------------------");
// d. Log the total number (count) unique elements available after removing the duplicates name
console.log(arrayOfDuplicateElements.length);