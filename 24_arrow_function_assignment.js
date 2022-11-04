console.log("Name : Anuradha Patil");
console.log("Assignment No: 1 ");
console.log("------------------------------------------------------------------------------------------------------------");
// Q.1 With no args and no return value, log message on console inside arrow function.
// a. "Good Morning, Today is Friday"

// let show = function(){
// console.log("Good Morning, Today is Friday"); // using function
// }
// show();
console.log(`Q.1 With no args and no return value, log message on console inside arrow function.`);
let show = () => {
console.log("Good Afternoon, Today is Friday");
}
show();

console.log("------------------------------------------------------------------------------------------------------------");
// Q.2 With 3 args and no return value, for received 3 parameters perform the multiplication
// a. Values to be passed => 5, 5, 2
// b. Invoke the same function for values => 10, 4 [Note: assign default value: 1 to 3rd arg]
console.log(` Q.2 With 3 args and no return value, for received 3 parameters perform the multiplication`);
let display = (n1, n2, n3=1) => {
console.log(`Multiplication of given numbers : ${n1*n2*n3}`);
}
display(5, 5, 2);
display(10, 4);

console.log("--------------------------------------------------------------------------------------------------------------");
// Q.3 with 5 args and return value such as, for received params it should do the addition
// a. Values to be passed => 100, 100, 200, 349, 756
console.log(`Q.3 with 5 args and return value such as, for received params it should do the addition`);

let addition = (n1, n2, n3, n4, n5) => n1 + n2 + n3 + n4 + n5

console.log(`Addition of (100,100,200,349,756) numbers is : ${addition(100, 100, 200, 349, 756)}`); 

//c. Invoke the same arrow function for values "I am", "learning", "ES6", "features", "in depth"
console.log(`Addition of given string is : ${addition( "I am", " learning", " ES6", " features", " in depth")}`);
