
const arrayOfNumbers = [2, 3, 5, 4, 6, 1];

const newArray = arrayOfNumbers.map((element) => {
    return element + 5;
});
console.log(newArray);
console.log(arrayOfNumbers);

console.log("----------- adding first 3 element -----------");
const arrayNew = arrayOfNumbers.map((element, index) => {
    if (index<=2) {
      return element + 5;  
    }
    return element;
});
console.log(arrayNew);
console.log(arrayOfNumbers);