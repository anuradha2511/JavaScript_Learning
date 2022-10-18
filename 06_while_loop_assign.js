// 1. WAP to print numbers from 5 to 15 by incrementing 1
console.log("------------------------ Using while loop ---------------------------");
console.log("Q.1 WAP to print numbers from 5 to 15 by incrementing 1");
var number = " ";
var num = 5; // initialization
while (num<=15) { // condition
    number = number + " " +  num;
   
   num++; // update
}
console.log(number); 

// 2. WAP to print numbers from 50 to 40 by incrementing by 1
console.log("--------------------------------------------------------");
console.log("Q.2 WAP to print numbers from 50 to 40 by incrementing by 1");
var count = 50; // initialization
var res = " ";
while (count >= 40) { //condition
   
    res = res + " " + count;
    count--; //update
    
}
console.log(res);
console.log("-------------------------------------------------------");
// Q.3 WAP to find first 15 odd numbers
console.log("Q.3 WAP to find first 15 odd numbers");
var num = 1;
var res = " ";
while (num%2!=0 && num<=15) {
    res = res + " " + num;
    num = num + 2;
}
console.log(res);

console.log("------------------------------------------------------");
// Q.4 WAP to find first 10 even numbers
console.log("Q.4 WAP to find first 10 even numbers");
var num = 0; // initialization
var result = " ";
while (num%2==0 && num<=10) { //condition
    result = result + " " + num;
    num = num + 2 // update (increment & decrement)
}
console.log(result);

console.log("--------------------------------------------------------");
// Q. 5 WAP to print table of 5 like --> 5 10 15 --- 50
console.log(" Q.5 WAP to print table of 5 like --> 5 10 15 20 --- 50");
var count = 5; // initialization
var res = " ";
while (count <= 50) { // condition
    var res = res + " " + count;
    count = count + 5; // update
}
console.log(res);

console.log("-------------------------------------------------------");
// Q.6 WAP to print table of 10 like 10 20 30 40 ------ 100
console.log("Q.6 WAP to print table of 10 like 10 20 30 40 ------ 100");
var num = 10; // initialization
var res = " ";
while (num<=100) { // condition
    res = res + " " + num;
    num = num + 10;
}
console.log(res);

console.log("----------------------------------------------------------");
// Q.7 WAP to print table of 10 in reverse order like --> 100 90 80 ------ 10
console.log("Q.7 WAP to print table of 10 in reverse order like --> 100 90 80 ------ 10");
var number = 100; // initialization
var result = "  100";
while (number > 10) {
    number = number - 10;
    result = result + " " + number;
}
console.log(result);