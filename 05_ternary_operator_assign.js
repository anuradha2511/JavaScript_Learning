console.log("--------------------- 1. ------------------------");
var greater_number = function(num1, num2){
var result = num1>num2 ? num1 :num2;
console.log(`Greatest number 10, -10 : ${result}`);

}
greater_number(10, -10);

var greater_number = function(num1, num2){
    var result = num1>num2 ? num1 : num2;
    console.log(`Greatest number 800, 899 : ${result}`);
}
greater_number(800, 899);

console.log("------------------------- 2. -----------------------");
var evenOdd = function( num1){
    var result = num1%2==0 ? true : false;
    return result;
}
console.log("number is Even or odd :",evenOdd(29));
console.log("number is Even or odd :",evenOdd(44)); 
console.log(" number is Even or odd :",evenOdd(0));
console.log("number is Even or odd :",evenOdd(101));

console.log("-----------------------3. -----------------------------");
var show = function(value){
   var str = value.length;
var result = str%2==0 ? "EVEN" : "ODD";
console.log(`length of word is EVEN or ODD : ${result}`);
}
 show("JavaScript");
 show("developer");
 show("Google");


