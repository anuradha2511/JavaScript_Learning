console.log("-----------------------------");
// 1. Count the total number vowels using includes() for string --> "Good Morning It Champ"
var givenString = "Good Morning It Champ";
var strLowerCase = givenString.toLocaleLowerCase();
var count = 0;
for (let index = 0; index < strLowerCase.length; index++) {
    var char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {

        console.log(char);
        console.log("-----------");
        count = count + 1;
        console.log(count);
    }
    //     var vowels = "aeiou";
    //    var value= vowels.includes(a);
    // if (vowels.includes(a)){

}

console.log("------------------ 2 -----------------");
// 2. Write a function to count vowels from the given string. Ex --> `I love JavaScript`
function string() {
    var sentence = `I Love JavaScript`;
    var strLowerCase = sentence.toLocaleLowerCase();
    var count = 0;
    for (let index = 0; index < strLowerCase.length; index++) {
        var char = strLowerCase.charAt(index);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            console.log(char);
cont = count + 1;
console.log(count);

        }
    }
}
string();

console.log("------------------- 3 -----------------------");
// 3. Write a function expression to sum all numbers from 1 to 10
var addition = function () {
    var add = 0;
    for (let index = 0; index <= 10; index++) {
        add = add + index;
    }

    console.log(`Addition is :${add}`);
}
addition();

console.log("------------------- 4 ---------------------------");
// 4. Write a function to get the sum of square numbers from 1 to 5
function sum() {
    var mult = 0;
    for (let index = 1; index <= 5; index++) {
        mult = mult + index * (index);

    }
    console.log(`The sum of square :${mult}`);
}
sum();

console.log("------------------- 5 ---------------------");
// 5. For the given string1 ---> "Hard work always pays back", string2 --> "Soon I will be Angular IT Champ" Write a functions as mentioned below.
function evenPositionedChars(arg) {
    var string1 = "Hard work always pays back";
    var string2 = "Soon I wil be Angular IT Champ";
    var char = string1.charAt(0);
    for (let index = 0; index < string1.length; index++) {
        if (index % 2 == 0 && char != " ") {
            console.log(char);
        }

    }

}
evenPositionedChars("Hard work always pays back");
