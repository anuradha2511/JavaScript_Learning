console.log("----------------------------------------------------");
console.log("Step 1. - Male marriage Eligibility using Ternary Operator");
function maleEligibilityMarriage(gender, age, boyName) {

    var result = gender == "male" && age >= 21 ? `Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are not eligible for Marriage`;
    console.log(result);
}
maleEligibilityMarriage("Male", 25, "Billgates");
maleEligibilityMarriage("Male", 17, "Stew Jobs");

console.log("---------------------------------------------------------");
console.log("Step 2. - Female marriage Eligibility using if block");

function femaleMarriageEligibility(gender, age, girlName) {
    if (gender == "female" && age >= 18)
    {
        console.log(`Hey ${girlName} you are eligible for Marriage`);
    } else {
        console.log(`Hey ${girlName} you are not eligible for Marriage`);

    }

}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female",27,"Malindra Gates");