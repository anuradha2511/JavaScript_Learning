var greet = "JavaScript the most popular language";
console.log(greet);

console.log("------------------------------------");
var count = greet.length;
console.log("Total character in the string = ", count);
//  console.log(greet.length);

console.log("-------------------------------------");
var char = greet.indexOf('S');
console.log("Index of character 's'= ",char);
// console.log(greet.indexOf('S'));

console.log("------------------------------------");
var char = greet.indexOf("lang");
console.log("Index of string 'lang' = ", char);
 // console.log(greet.indexOf("lang")); 

 console.log("-----------------------------------");

  var char = greet.charAt(greet.length-1);
  console.log("Last character = ", char);

  console.log("------------------------------------");

//   console.log(greet.charAt(greet.length-1));

  var char = greet.charAt(greet.length-3);
  console.log("3rd last character = ",char);
