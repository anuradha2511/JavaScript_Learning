console.log("---------------------------- Reserve string ---------------------");
function reserveString(arg){
    var argLength = arg.length-1;
        var reserve = " ";
for (let index = argLength; index >=0; index--) {
    var char = arg.charAt(index);
    reserve = reserve + arg.charAt(index);

}
console.log(reserve);
}
reserveString(` Hard work always pays back`);
reserveString(`Soon I will be Angular IT Champ`);
