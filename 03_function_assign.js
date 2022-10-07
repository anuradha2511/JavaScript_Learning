 console.log("========== No arguments =========== ");
function display(){
    console.log("Hello Friends");
}
display();
console.log("Welcome to JavaScript");
function show(){

}
show();

console.log("========== concat ==========");
function addition( firstName, lastName){
console.log(firstName + lastName);
}
addition("Anuradha","Patil");

function swap_values(cricketer, actress){
    console.log("------- Before swap ---------");
    console.log(cricketer, actress);
    console.log("--------- After swap ---------");
    var temp = cricketer;
    cricketer = actress;
    actress = temp;
    console.log(cricketer, actress);
}
swap_values("Virat","Anushka");
swap_values("1000","2000");

console.log("======== Addition of three values =======");
function add_three_numbers(arg1, arg2, arg3){
console.log(arg1 +arg2 +arg3 );
}
add_three_numbers(10.23,600,40);
add_three_numbers("Hello","Good","Morning");