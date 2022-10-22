
let teacher = {
fullName:"Vaishali Bamankar",
qualification: "MSC",
age:35,
degrees: {
    engineering: `CSC`,
    PHD:`Adv Computing`,
 certificates: {
    certificate1: "Hacker Rank Participation",
    certificate2: "Certificate in IFE course",
    certificate3: "Certificate in Adv Programming",
},
teaching:function(){
let teach = `Teachers Degree are: ${this.engineering} , ${this.PHD}`
return teach;
}
}

}
console.log(teacher);

console.log("--------------------------------------------------------------");
let vTeach = teacher.degrees.teaching();
console.log(vTeach);

console.log("---------------------------------------------------------------");
console.log(`Update new property City : "Sangali"`);
teacher.city="Sangali";
console.log(teacher);

console.log("----------------------------------------------------------------");
console.log(`Modify existing property fullName`);
teacher.fullName= "Vashali Ravindra Bamankar";
console.table(teacher);

console.log("-----------------------------------------------------------------");
console.log(`Total certificates before delete`);
console.log(teacher.degrees.certificates);

console.log("------------------------------------------------------------------");
console.log(`Total certificate after delete`);
delete teacher.degrees.certificates.certificate1;
console.table(teacher.degrees.certificates);

console.log("------------------------------------------------------------------");
console.log(`Add new certificate in Nested object`);
teacher.degrees.certificates.certificate4 = "Data Science";
console.table(teacher.degrees.certificates);

console.log("--------------------------------------------------------------------");
console.log(Object.entries(teacher)); 
console.log(Object.keys(teacher));
console.log(Object.values(teacher));

console.log("--------------------------------------------------------------------");
console.log(typeof teacher); // typeof