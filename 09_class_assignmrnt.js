// Q1. Define a class for Vehicle which should contains.
//  i. Properties or attributes or data members.
//  ii. Constructor

class Vehicle {
   name
     color
     engine
     price
    constructor(name, color,engine, price)
    {         this.name = name;
       this.color = color;
       this.engine = engine
        this.price = price;
    }

 }
  let bike = new Vehicle("Pulser", "black", "125cc", "1.2lack");
 let car = new Vehicle("Ertiga","white", "750cc", "13lack" );
 let bike2 = new Vehicle("Bullet 350","Black", "346cc", "1.4lack");
let car2 = new Vehicle("Maruti800", "White","796cc", "2.19lack")
 console.log(bike);
 console.log(car);
console.log(bike2);
console.log(car2);

console.log("*****************************************************************************************************");
// Q2. Define class fpr College which must contain
//  i. Properties or attributes or data members.
//  ii. Constructor

class College {
    constructor(college_name, college_address, college_established, college_faculty) {
        this.college_name = college_name;
        this.college_address = college_address;
        this.college_established = college_established;
        this.college_faculty = college_faculty;
    }
    details() {
        console.log(`College Details : ${this.college_name} ${this.college_address} ${this.college_established} ${this.college_faculty}`);
    }

}
let college1 = new College("K.R.P college", "Islampur", 1989, 40);
let college2 = new College("RIT college", "Islampur", 1983, 90);
let college3 = new College("Venutai Chavan college", "Karad", 1971, 48);
let college4 = new College("Yashwantrao Chavan college", "Karad", 1958, 72);

console.log(college1);
console.log(college2);
console.log(college3);
console.log(college4);

console.log("--------------------------- Details -------------------------------------");
college1.details();
college3.details();
console.log("---------------------------- typeof --------------------------------------");
console.log(typeof College);
console.log(college1 instanceof College);
console.log("***************************************************************************************************");
// Q3. Write a function --> tra
console.log("--------------------- Q3 Traverse object (using for-in-loop)  ---------------");
//function traverse_object() with one arg. such that it should traverse the complete
function traverse(object) {

    for (const key in college1) {
        if (Object.hasOwnProperty.call(college1, key)) {
            const element = college1[key];
            console.log(element);

        }
    }
}
traverse(college1);
console.log("--------------------------------------------");

function traverse(myObject) {
    for (const key in college2) {
        if (Object.hasOwnProperty.call(college2, key)) {
            const element = college2[key];
            console.log(element);

        }
    }
}
traverse(college2);
console.log("--------------------------------------------");

function traverse(myObject) {
    for (const key in college3) {
        if (Object.hasOwnProperty.call(college3, key)) {
            const element = college3[key];
            console.log(element);
            
        }
    }
}
traverse(college3);
console.log("******************************************************************************************************");
//Q4. WAF to print Fibonacci series till 7th occurrence


