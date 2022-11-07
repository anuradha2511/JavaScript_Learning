


const arrayNumbers = [10, 20, 30, 40, 20, 10];
arrayNumbers.forEach(function(currentValue, index, array){
console.log(currentValue, index, array);
});


arrayNumbers.forEach((currentValue, index) => {
    console.log(currentValue, index);
});

console.log("--------------------------------------------------------");
const array = [10, -20, 30, 40, -30];
array.forEach((currentValue, index) => {
    if (currentValue<0) {
        console.log(currentValue, index);
    }
});

console.log("=========== Traversing set using forEach() ==============");
const setOfNumbers = new Set(arrayNumbers);
setOfNumbers.forEach( (value) => {
console.log(value);
});

console.log("============= Traversing map using forEach() ==============");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );
