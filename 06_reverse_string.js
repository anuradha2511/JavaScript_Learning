var myName = "Mohit";
// 10 to 0
var lengthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lengthStr; index >= 0; index--) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);

console.log("-----------------------------------------");
// 0 + 1 + 2 + 3 + 4 + 5
var add = 0;
for (let index = 0; index <= 5; index++) {
    add = add + index;
       
}
console.log(`Addition is : ${add}`);

console.log("===============================================");
function reserveString(arg){
    var argLength = arg.length-1;
        var reserve = " ";
for (let index = argLength; index >=0; index--) {
    console.log(arg.charAt(index));
    reserve = reserve + arg.charAt(index);

}
console.log(reserve);
}
reserveString(` Hard work always pays back`);
