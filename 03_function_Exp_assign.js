console.log("---------------- 1.Square of the number -----------------");
// function square(value) {      
// console.log(value * value);

// }
// square(5);
// square(6);
// square(25);
// square(100);

//function Expression
var square = function (value) {
    console.log(value * value);
}
square(5);
square(6);
square(25);
square(100);

console.log("------------------ 2.typeof function --------------------- ");
console.log(typeof square);


console.log("------------------- 3. -----------------------");
var areaTriangle = function (base, height) {
    var area = 1 / 2 * (base * height);
    console.log("Area of Triangle =", +area);
}
areaTriangle(45, 34);


console.log("------------------- 4. -------------------------");
var areaRectangle = function (length, width) {
    var area = length * width;
    console.log("Area of Rectangle =", area);
}
areaRectangle(499, 917);

console.log("-------------------- 5.FE- swap ----------------------------");
var swap_values = function (cricketer, actress) {
    console.log(" ------------ Before swap -------------");
    console.log(cricketer, actress);
    console.log(" ------------ After swap --------------");
    var temp = cricketer;
    cricketer = actress;
    actress = temp;
    console.log(cricketer, actress);

}
swap_values("Virat", "Anushka");
swap_values(1000, 2000);