// Write a program to print numbers from 5 to 15 by incrementing 1.
for (let index = 5; index <= 15; index= index+1) {
    console.log(index);
    
}

console.log("************ 50 to  40 by Incrementing 1 ******************");
// WAP to print numbers from 50 to 40 by decrementing 1 
// 
for (let index = 50; index >= 40 ; index = index-1) {
console.log(index);
    
}

console.log("*************** First 15 odd Numbers  ********************");
// WAP to find firs 15 odd numbers
for (let index =1 ; index <= 30; index = index+2 ) {
    console.log(index);
    
}
console.log("*************** First 10 Even Numbers ****************");
// WAP to find first 10 even numbers
for (let index = 2; index <= 20; index = index+2) {
    console.log(index);
    
}
console.log("*************** Print table of 5 ****************");
// WAP to print table of 5 like --> 5 10 15.......50
for (let index = 5; index <=50; index = index+5) {
   console.log(index);
}

console.log("*************** Print table of 10 ****************");
// WAP to print table of 10 like 10 20 30 ....... 100
for (let index = 10; index <= 100; index = index+10) {
   console.log(index);
}

console.log("************** Print table 10 in reverse order ***************");
// WAP to print table of 10 in reverse order like 100 90 80 ----- 10
for (let index = 100; index >= 10; index = index-10) {
   console.log(index);
   
}

console.log("*************** ****** ****************");
var countEven = 0;
for (let index = 2; index < 50; index++) {
   if (index%2==0) {
      console.log(index);
      countEven = countEven +1;
      if (countEven==13) {
         break;
         
      }
      
   }
   
}