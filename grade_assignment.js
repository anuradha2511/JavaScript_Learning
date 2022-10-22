
function gradeSystem(score) {
if(score < 35) {
    console.log("You are failed");
    console.log("--------------------------------");
}
if (score == 35) {
    console.log("You are passed");
    console.log("--------------------------------");
}

    if ( score >=35 && score < 60 ) {
       console.log("Passed and GRADE is C");
       console.log("--------------------------------");
    }

    if (score >= 60 && score < 75) {
        console.log("Passed and GRADE is B");
        console.log("--------------------------------");

    }

if (score >= 75 && score < 90) {
    console.log("Passed and GRADE is A");
   console.log("--------------------------------");
}

if (score >= 90 && score <= 100) {
    console.log("Passed and GRADE is A+");
    console.log("--------------------------------");
}

if (score <0 || score == " ") {
   console.log("Invalid input");
}

if (score <0 || score >=100 || score == " " || score == null || score == undefined || typeof score==`string`) {
    console.log("Invalid input");
    console.log("--------------------------------");
}

}
console.log("Score is 66");
gradeSystem(66);
//console.log("------------------------------------------");
console.log("Score is 13");
gradeSystem(13);
//console.log("-------------------------------------------");
console.log(`Score is " "`);
gradeSystem(" ");
//console.log("-------------------------------------------");
console.log("Score is 98");
gradeSystem(98);
//console.log("--------------------------------------------");
console.log("Score is Fifty Five");
gradeSystem("fifty Five");
//console.log("---------------------------------------------");
console.log("Score is 35");
gradeSystem(35);
//console.log("---------------------------------------------");
console.log("Score is 75");
gradeSystem(75);
//console.log("---------------------------------------------");
console.log("Score is null");
gradeSystem(null);
//console.log("----------------------------------------------");
console.log("Score is undefined");
gradeSystem(undefined);
//console.log("----------------------------------------------");
console.log("Score is -20");
gradeSystem(-20);
//console.log("-----------------------------------------------");
console.log("Score is 55");
gradeSystem(55);
//console.log("-----------------------------------------------");
console.log("Score is 82");
gradeSystem(82);
