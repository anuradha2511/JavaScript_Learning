
function gradeSystem(score) {
if(score < 35) {
    console.log(`You are failed`);
    console.log("--------------------------------");
}
if (score >= 35) {
    console.log(`You are passed`);
    console.log("--------------------------------");
}

    if ( score >=35 && score < 60 ) {
       console.log(`Passed and GRADE is C`);
       console.log("--------------------------------");
    }

    if (score >= 60 && score < 75) {
        console.log(`Passed and GRADE is B`);
        console.log("--------------------------------");

    }

if (score >= 75 && score <= 90) {
    console.log(`Passed and GRADE is A`);
    console.log("--------------------------------");
}

if (score >= 90 && score <= 100) {
    console.log(`Passed and GRADE is A+`);
    console.log("--------------------------------");
}

//if (score <0 || score> 100) {
  // console.log(`Invalid score);
//}

if (score= "Fourty Five Score ") {
    console.log(`Invalid Input String`);
    console.log("--------------------------------");
}

if (score == null || score == undefined) {
    console.log(`Invalid Input`);
    console.log("--------------------------------");
}

}
gradeSystem(66);
gradeSystem(13);
gradeSystem(" ");
gradeSystem(98);
gradeSystem("fifty Five");
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);
