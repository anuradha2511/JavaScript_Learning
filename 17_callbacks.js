function do_assignment(callback) {
    console.log("I am Doing assignment and it is done now...");
    callback();
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}

do_assignment(copy_assignment);


function display() {
    console.log("display function");
}

setTimeout(display, 4000);

setInterval(display, 2000);

//console.log("--------------------------------------- practice -------------------------------");
// function doAssign(callMe) {
//     console.log("i am doing assign");
//     callMe();
// }

// function copyAssign(){
// console.log("Hey bro... thank you");
// }
// doAssign(copyAssign);


// function aaa(){
// console.log("aaa");
// }

// setInterval( aaa, 4000);

