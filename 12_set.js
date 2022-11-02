let arrayOfNumbers = [2, 3, 4, 5];
arrayOfNumbers.push(3);
console.log(arrayOfNumbers);
arrayOfNumbers.length = 0;
console.log(arrayOfNumbers);

console.log("-------------------------------------------------------------------------------------------");

let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== Checking number elements available into set =======");
console.log(setOfNumbers.size);

console.log("====== Deleting element 9 =======");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);


console.log("====== Check whether element 7 available into set or not =======");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("====== Traversing set =======");
for (const element of setOfNumbers) {  // using for of loop
    console.log(element);
}

let arrayNumbers = [2, 3, 4, 5, 6, 3, 5];
let arrayUniqueElement = [...new Set(arrayNumbers)]; // remove duplicate value
console.log(arrayUniqueElement);




console.log(" ");
console.log("********************************* practice ************************************");
let setValue = new Set();
setValue.add(25);
setValue.add(24); // adding value
setValue.add(29);
console.log(setValue);

setValue.add(25); // it will not allow duplicate value
console.log(setValue);
console.log(setValue.size); 
console.log(setValue.delete(29)); // delete 
console.log(setValue.has(25)); // 

for (const set of setValue) { // traversing using for of loop
    console.log(set);
}


let array = [3,4, 5, 6, 3, 2];
let setArray = [...new Set (array)]; // remove duplicate values in array
console.log(setArray);