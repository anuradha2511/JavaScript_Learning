const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal);

console.log("---------------------------- 1. First and Last element ----------------------------------------------");
// 1. First and Last element
const fruitsFirst = fruits_seasonal[0];
console.log("First element:",fruitsFirst);
const fruitsLast = fruits_seasonal[4];
console.log("Last element:",fruitsLast);


console.log("---------------------------- 2. Add element Papaya before the element 'Banana'-------------------------");
// 2. Add element --> Papaya before the element "Banana" amd then log array on console
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log("---------------------------- 3. Remove 'Mango' from the array -----------------------------------------");
// 3. Remove 'Mango' from the array
fruits_seasonal.splice(4, 1);
console.log(fruits_seasonal);

console.log("---------------------------- 4. Add element or insert element 'Pineapple' at last position -------------");
// 4. Add element or insert an element 'Pineapple' at the last position
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);

console.log("---------------------------- 5.Insert element 'Dragon Fruit' before 'Water Melon'------------------------");
// 5. Insert element 'Dragon Fruit' before 'Water Melon'
fruits_seasonal.splice(4, 0, "Dragon Fruit")
console.log(fruits_seasonal);

console.log("---------------------------- 6. Replace an element 'Orange' with 'Kiwi' ---------------------------------");
// Q 6. Replace an element 'Orange' with 'Kiwi'
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(fruits_seasonal);

console.log("---------------------------- 7. Log the elements starting from index 1 to 4 ------------------------------");
// Q 7.Log the elements starting from index 1 to 4
 let fruit = fruits_seasonal.slice(1, 4);
console.log(fruit);

console.log("---------------------------- 8. Only select last 3 element ------------------------------------------------");
// Q8.  Only select last 3 element and log on console: Use the length property
  const element = fruits_seasonal.slice(4);
 console.log(element);