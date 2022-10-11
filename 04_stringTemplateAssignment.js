var  stringAssignment = function(){
    

console.log("-----------------------1---------------------");

    console.log('My dream company is "TCS"');

    console.log("--------------2. Log hobbies separately ---------------");
    var hobby_1 = "Gardening";
    var hobby_2 = "Cooking";
    var hobby_3 = "Traveling";
    console.log("My hobbies are :");
    console.log("1.",hobby_1);
    console.log("2.", hobby_2);
    console.log("3.", hobby_3);
    //console.log("My hobbies are :", "1.",hobby_1 , "2.",hobby_2, "3.",hobby_3 );

    console.log("-------------------3.Concat----------------------");
    var concatHobbies = hobby_1.concat(" ", hobby_2 ," ", hobby_3)
    console.log(" My hobbies are :", concatHobbies);

//console.log(hobby_1 + hobby_2 + hobby_3);
}
stringAssignment();
