var stringHandsOn = function () {

console.log("----------1. Print the string as it is ----------");
var str = "   Hey you are doing good, keep it up    ";
console.log(str);

console.log("------------------------ 2. ---------------------------");
var count = str.length;
console.log(`Length of string is : ${count}`);

console.log("----------------------- 3.----------------------------");
var trimString = str.trim();
console.log(`Remove extra spaces : ${trimString}`);

console.log("----------------------- 4.--------------------------");
var finalResult = count-trimString.length;
console.log(`Count of extra spaces : ${finalResult}`);

console.log("------------------------5.-------------------------- ");
console.log(`First character after trim : ${trimString.charAt(0)}`);
console.log(`Last character after trim : ${trimString.charAt(33)}`);

console.log("-----------------------6.-------------------------");
  var stepSpilt = trimString.split(" ");
console.log(`Count of total words : ${stepSpilt.length}`);

console.log("----------------------7.--------------------------");
var test = trimString.indexOf("good");
console.log(`Index of word good is : ${test}`);

console.log("----------------------8-.--------------------------");
console.log(`Using substring starting from index 22 : ${trimString.substring(22)}`);
console.log(`Using slice starting from index 22 : ${trimString.slice(22)}`);

console.log("------------------------9.--------------------------");
console.log(`Is string ends with word up : ${trimString.endsWith("up")}`);

console.log("---------------------------10.-----------------------");
console.log(`Is string starts with word Hey : ${trimString.startsWith("Hey")}`);
}
stringHandsOn();