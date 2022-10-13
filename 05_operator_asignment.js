console.log("....................... 1 ..........................");
var worldLengthSquare = function(word){
var worldLength = word.length;
return worldLength * worldLength;
}
console.log(`Length square : ${worldLengthSquare("JavaScript")}`);
console.log(`Length square : ${worldLengthSquare("Google")}`);
console.log(`Length square:${worldLengthSquare("Developer")}`);

console.log("....................... 2 .........................");
var test = function(){

   var stringLength = "I am Angular Developer".length;
console.log(`Given string length : ${stringLength}`);

var string = "I am Angular Developer".split(" ");
var total_words = string.length;

console.log(`Total number words : ${total_words}`);

 var divide = stringLength / total_words;
console.log(`String length divided by total number : ${divide}`);

var multiple = stringLength * total_words;
console.log (`String multiply by total words : ${multiple}`);

console.log("........................3 ............................");

var string = function(str){
var givenString = "I am Angular Developer";

console.log(`Given string : ${givenString}`);

return str.split("").reverse().join("");
}

stringReverse = string("I am Angular Developer");
console.log(`Reverse string : ${stringReverse}`);

}
test();


