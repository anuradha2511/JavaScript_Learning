console.log("---------------------------- Reverse string ---------------------");
function reserveString(arg){
    var argLength = arg.length-1;
        var reverse = " ";
for (let index = argLength; index >=0; index--) {
    //console.log(arg.charAt(index));
    reverse = reverse + arg.charAt(index);

}
console.log(reverse);
}
reserveString(` Hard work always pays back`);
reserveString(`Soon I will be Angular IT Champ`);
