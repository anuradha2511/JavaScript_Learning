
const arrayOfNumbers = [2, 3, 5, 4, 6, 1];

 let newArray = arrayOfNumbers.filter((element) =>{
    return element >= 4;

} );
console.log(newArray);


console.log("----------------------------- using reduce () --------------------------");
let sum = arrayOfNumbers.reduce((value, runningTotal) => {
    return value + runningTotal;
} );
console.log(sum);

