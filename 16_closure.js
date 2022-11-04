var global_variable = 300;
function outer() {
    let outer_fun_variable = 100;
    let inner_fun = function() {
        let inner_fun_variable = 200;
        console.log(inner_fun_variable, outer_fun_variable, global_variable);
    }
    return inner_fun;
}
let returnValue = outer();
returnValue();


console.log("--------------------------- practice -------------------------------");
// var globalVariable = 100;
// function outer(){
// let outerFunVariable = 200;
// let innerFun = function () {
//     let innerFunVariable = 300;
// console.log(innerFunVariable, outerFunVariable, globalVariable);
// }
// return innerFun;

// }
// let return_value = outer();
// return_value();