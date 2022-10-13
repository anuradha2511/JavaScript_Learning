console.log("------------------ 1. Even or Odd -----------------------");
var value = function(arg1) {
    if (arg1%2 == 0) {
        console.log("value is Even");
    }
    else {
        console.log("value is Odd");
    }
}
value(45);
value(70);
value(67);
value(98);

console.log("================= 2. Eligible for vote or not =================");
var test = function(num1) {
    if (num1>= 18) {
        console.log("The person is eligible for vote");
    } else {
        console.log("The person is not eligible for vote");
    }

}
test(18);
 console.log("------------------------------------------------");
var test = function(num2) {
    if(num2>=18)
    {
console.log(`The person is eligible for vote`);
    }
else{
    console.log(`The person is not eligible for vote`);
}
}
test(20);

console.log("-------------------------------------------------");
var test = function(num1) {
    if(num1>=18)
    {
console.log('The person is eligible for vote');
    }
    else{
        console.log(`The person is not for vote`);
    }
}
test(17);

console.log("------------------------------------------------");

var test = function(num1) {
    if(num1>=18)
    {
        console.log(`The person is eligible for vote`);
    }
    else{
        console.log(`The person is not eligible for vote`);
    }
    
}
test(40);

console.log("====================== 3.===========================");
var string = function(arg){
    var str = arg.length;
    if(str>=10)
    {
console.log(`String contains more than 10 character`);
    }
    else {
        console.log(`String not contains more than 10 character`);
    }
}
string("JavaScript-ES6");

console.log("-------------------- 4. ---------------------------");
var str = function(arg){
if(arg.startsWith("Java"))
{
    console.log(`String start with "Java"`);
}
else{
    console.log(`String Not start with "Java"`);
}
}
str("JavaScript Language");

    
