// Q. Create a class `Bank` with all possible data members in such as way that all properties should be initialized using constructor
// A. Data members: bank_name, location, account_no, ifsc, interest_rate
class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name,
            this.location = location,
            this.account_no = account_no,
            this.ifsc = ifsc,
            this.interest_rate = interest_rate

    }

}
// B. Create objects - axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank
let axis_bank = new Bank("Axis Bank", "Kolhapur", "1622456647", "UTIB0000134", "5.5%");
let sbi_bank = new Bank("SBI Bank", "Satara", "1632546985", "SBIN0061384", "7%");
let icici_bank = new Bank("ICICI Bank", "Karad", "16354125444", "ICICI0000493", "10.50%");
let kotak_bank = new Bank("Kotak Bank", "Sangli", "1658745324", "KKB0002046", "8%");
let hdfc_bank = new Bank("HDFC Bank", "Islampur", "1325478964", "HDFC0002455", "9%");
let panjab_bank = new Bank("Panjab Bank", "Pune", "100254687542", "PNJ0023654", "10%")

// C. Add all object elements in a array and just log on console - Bank name and location
console.log("=================================================== Bank name and Location ============================================= ");
const array = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
   // console.log(`${element.bank_name} : ${element.location}`);

}

for (const Bank of array) {
    console.log(`${Bank.bank_name} : ${Bank.location}`);
}
console.log("============================================== Object which has name Kotak bank ============================================");
// D. From the array( Step A) find the object which has name --> Kotak bank using for of loop
for (const bank of array) {
    if (bank.bank_name=="Kotak Bank") {
        console.log(bank);
    }
}

console.log("================================================== All bank Details =========================================================");
// E. Log the details on console suing for loop
for (const bank of array) {
    console.log(bank);
}