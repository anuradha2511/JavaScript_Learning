
let objectSachin = {
    fullName: "Sachin Tendulkar",
    city: "Mumbai",
    age: 42,
    isMarried: true,
    address: {
        street: "AS CLUB",
        pin_code: 123456,
        city: "PUNE",
        state: "MH"
    },
    eat:function() {
        console.log("I am vegetarian");
    },
    details: function(){
        let objectSachinDetails = `Details are : ${this.fullName}, ${this.age}, ${this.address.city}`
    return objectSachinDetails;

    }
}
console.log(Object.entries(objectSachin)); //
console.log(Object.keys(objectSachin));
console.log(Object.values(objectSachin));

let sDetail = objectSachin.details();
objectSachin.details();
console.log("=======================");
console.log(typeof objectSachin);     // typeof

console.log(objectSachin.address);
console.log(objectSachin.address.street);
objectSachin.address.landmark = "Near Main Road"; // update value : add

objectSachin.eat();

objectSachin.fullName = "Sachin Ramesh Tendulkar"; // update
objectSachin.pinCode = 123456; // add
objectSachin.profession = "Angular Developer";
delete objectSachin.age;         // delete
console.log(objectSachin);

console.log(objectSachin.city);     // . use
console.log(objectSachin["age"]);   // []

let objectSachinFullName = objectSachin.fullName;
console.log(objectSachinFullName);
console.log(objectSachin.fullName);
console.log(objectSachin.city);
console.log(objectSachin.address.city);


let collegeAbc = {

}
console.log(collegeAbc);