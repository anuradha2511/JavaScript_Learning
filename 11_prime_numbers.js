function primeNumber(numberToCheck){
    for (let index = 2; index < numberToCheck; index++) {
      if(numberToCheck%index==0) {
          return false;
      }
    }
    return true;
  }
  
  console.log(primeNumber(11));
  console.log(primeNumber(9));
  console.log(primeNumber(29));

  console.log("======================");
  function prime(numberToCheck){
    for (let index = 2; index < prime; index++) {
      if (numberToCheck%index==0) {
        return false;
      }
      
    }
    return true;
  }
  console.log(prime(29));
  console.log(prime(9));
  console.log(prime(11));

  console.log("------------------------------------");

  const array = [1, 6, 5, 3, 11, 23, 4];
  array.forEach((currentValue) => {
    console.log(currentValue);
  });
console.log("---------------------------------------");
  for (let index = array.length-1; index >=0; index--) {
    const element = array[index];
    console.log(element);
  }

  console.log("---------------------------------------");
array.forEach((currentValue, index) => {
  if (index %2!= 0) {
    console.log(currentValue);
  }
});

console.log("--------------------");
const arrayNum = [1, 6, 5, 3, 11, 23, 4];
for (let index =arrayNum.length-1; index >=0; index--) {
  const element = arrayNum[index];
  console.log(element);
}
arrayNum.reverse();
console.log(arrayNum);
console.log("----------");
let mult= 0;
for (let index = 0; index < arrayNum.length; index++) {

  mult = mult * arrayNum[index];
}
console.log(mult);

console.log("----------");
arrayNum.sort((first, second) => {
  return first > second ? 1 : -1;

});
console.log(arrayNum);  

arrayNum.sort((first, second) => {
  return first > second ? -1 : 1
});
console.log(arrayNum);

arrayNum.reverse();
console.log(arrayNum);
