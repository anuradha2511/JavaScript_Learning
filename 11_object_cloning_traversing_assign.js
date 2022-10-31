// Q.1 Create the object --> `bank_sbi` using literals with at least 4 properties
let bank_sbi = {
    bankName: "Bank of India",
    bankIFSCVode: "DKID001622",
    branchName: "Kasegoan",
    schemeDesc: "Savings Bank General"
}

// Q.2 Create the object --> `bank_location` using literals with properties: street, city, pin_code
let bank_location = {
    street:" Sangali",
    city: "Kasegoan",
    pin_code: "415404"
}

// Q.3 Clone the step 1(bank_sbi) and step 2 (bank_location) objects using Object.assign and Spread Operator
console.log("============================ Q.3 Clone using Object.assign (step 1) ====================================");
let bank_sbi_clone = Object.assign({}, bank_sbi);
console.log(bank_sbi_clone); 

console.log("============================ Clone using spread operator{...} (step 1) ==================================");
let bankSbiClone = {...bank_sbi};
console.log(bankSbiClone);

console.log("============================ Q.3 Clone using Object.assign (step 2) =====================================");
let bank_location_clone = Object.assign({}, bank_location);
console.log(bank_location_clone);

console.log("============================ Clone using spread operator{...} (step 2) ==================================");
let bankLocationClone = {...bank_location};
console.log(bankLocationClone);
 
// Q.4 Create the object using literals --> rate_of_interest with properties --> home_loan_interest, personal_loan_interest, due_interest
let rate_of_interest = {
    home_loan_interest: "6.40%",
    personal_loan_interest:" 10.55%",
    due_interest: "3.5%"
}

// Q.5 Merge the step 1, step 2 and step 4 into new object namely --> sbi_details 
console.log("============================ Q.5 Merge step 1, step 2, and step 4 ==========================================");
let sbi_details = Object.assign({}, bank_sbi, bank_location, rate_of_interest);
console.log(sbi_details);
console.table(sbi_details);

// Q.6 Traverse this merged object - step 5 using loop
console.log("============================ Q.6 Traverse merged objects ====================================================");


 for (const index in sbi_details) {
    const element = sbi_details[index];
    console.log(element);
 }

for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
       // console.log(`${element} ${key}`);
    }
}