console.log("------------------------- 1.Count the total number vowels using includes() --------------");
// 1. Count the total number vowels using includes() for string --> "Good Morning It Champ"
var vowels = function (myString) {
    //var givenString = "Good Morning It Champ";
    var strLowerCase = "aeiou";
    var strUpperCase = "AEIOU";
    var vowelsCount = 0;
    for (let index = 0; index < myString.length; index++) {
        var char = myString.charAt(index);
        var vowelsLoweCase = strLowerCase.includes(char);
        var vowelUpperCase = strUpperCase.includes(char);
        if (vowelsLoweCase || vowelUpperCase) {
            vowelsCount = vowelsCount + 1;
        }
    }
    console.log(` Total count vowels : ${vowelsCount}`);
}
vowels("Good Morning It Champ");

console.log("----------------------- 2. Count vowels from the given string -----------------------");
// 2. Write a function to count vowels from the given string. Ex --> `I love JavaScript`
function string() {
    var sentence = `I Love JavaScript`;
    var strLowerCase = sentence.toLocaleLowerCase();
    var countVowels = 0;
    for (let index = 0; index < strLowerCase.length; index++) {
        var char = strLowerCase.charAt(index);
        if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u") {
    
            countVowels = countVowels + 1;
            

        }
    }
    console.log(`Count vowels : ${countVowels}`);
}
string();

console.log("------------------------ 3. Sum all numbers from 1 to 10 ----------------------");
// 3. Write a function expression to sum all numbers from 1 to 10
var addition = function () {
    var add = 0;
    for (let index = 0; index <= 10; index++) {
        add = add + index;
    }

    console.log(`Addition is :${add}`);
}
addition();

console.log("----------------------- 4. Sum of square numbers from 1 to 5 ------------------");
// 4. Write a function to get the sum of square numbers from 1 to 5
function sum() {
    var mult = 0;
    for (let index = 1; index <= 5; index++) {

        mult = mult + index * index;

    }
    console.log(`The sum of square 1 to 5 :${mult}`);
}
sum();

console.log("------------------------------- 5. Even position number ---------------------------");
// 5. For the given string1 ---> "Hard work always pays back", string2 --> "Soon I will be Angular IT Champ" Write a functions as mentioned below.
function evenPositionedChars(myString) {
    var result = " ";
    for (let index = 0; index < myString.length; index++) {
        var char = myString.charAt(index);
        if (index % 2 == 0 && char != " ") {
    result = result + char;
           
        }
  }
  console.log(result);
}
evenPositionedChars(`Hard work always pays back`);
evenPositionedChars(`Soon I will Angular IT Champ`);

//*********************************************** Q.1 & Q5 ****************************************************** */

// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function (myString) {
   // console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount = 0;
    for (let index = 0; index < myString.length; index++) {
        var char = myString.charAt(index);
        var isLowerAvailable = vowelsLoweCase.includes(char);
        var isUpperAvailable = vowelUpperCase.includes(char);
        if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
        }
    }
   // console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");
// console.log("============================");
// function evenPositionedChars(myString) {
//     for (let index = 0; index < myString.length; index++) {
//         // console.log(index%2==0);
//         var chh = myString.charAt(index);
//         if (index % 2 == 0 && chh != " ") {
//             console.log(chh);
//         }
//         //var chh = myString.charAt(index);

//     }
// }
// evenPositionedChars("Hard work always pays back");

