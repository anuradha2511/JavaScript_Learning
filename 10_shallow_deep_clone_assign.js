
// Q1.Perform shallow clone on array_nums, update cloned array with values --> 55, 66 using push() and log original and cloned array on console
console.log("------------------------------ Q1. Shallow clone --------------------------------------");
const array_nums = [20, 3, 4, 56, 90, 400, 49];
console.log("Orignal array");
console.log(array_nums);

console.log("Shallow clone");
const array_nums2 = array_nums;
console.log(array_nums2);

console.log("Update cloned array");
array_nums.push(55, 66);
console.log(array_nums);

console.log("------------------------------ Q2.Deep clone using spread operator [...] ------------------");
// Q2. Perform deep clone using spread operator, Update original array i.e array_nums with values 10,25 at last position
console.log("Orignal array");
console.log(array_nums);

const otherArray = [...array_nums];
array_nums.push(10);
array_nums.push(25);
console.log("Update orignal array ");
console.log(array_nums);

console.log("New array");
console.log(otherArray);

console.log("----------------------------- Q3. Merge or concat ------------------------------------------");
// Q.3 Given other array --> array_even = [2,30,14,8], Merge or concat this array with'array_nums' using spread operator, log result on console after merge array operation

console.log("array_even");
const array_even = [2, 30, 14, 8];
console.log(array_even);

console.log("Merge or concat using spread operator");
arrayConcat = [...array_nums, ...array_even];
console.log(arrayConcat);

console.log("=======================================================================================================================================");
// Q.4 Create the employee_info object as shown in snippet-->
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR",
    },
    address: {
        locality: {
            colony: "OmVrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"

    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log("------------------------------------------------------- Q5. a. -----------------------------------------------------------------");
// Q.5 Log the details on console like
// Q5.a Address: Locality, city, state and country
console.table(employee_info.address);

console.log("-------------------------------------------------------- Q5.b -------------------------------------------------------------------");
// Q5.bMobile numbers
console.log("employees mobile number :", employee_info.mobiles);

console.log("---------------------------------- Q6. deep clone using (...operator) ------------------------------------------------------------");
// Q.6 Perform the deep clone using ...operator
new_employee = { ...employee_info };
new_employee.address.locality.street = "Khav Galli";
new_employee.mobiles[0] = "9658743258";
console.log(" --------------------- Q6.a update cloned object street property --------------");
console.table(new_employee.address.locality.street);
console.log("---------------------- Q6.b update mobiles first value with your mobile no.");
console.table(new_employee.mobiles);
console.table(employee_info);
console.table(new_employee);

console.log("----------------------------------- Q 7. deep copy using JSON.stringfy() -----------------------------------------------------------");
// Q7. Then deep copy using JSON.stringfy()
// a. Update property 'july_month' salary to 80k
new_employee = JSON.parse(JSON.stringify(employee_info));
new_employee.salary.july_month = "80,0000INR";
new_employee.country = "United Kingdam";

console.table(new_employee);
console.log("---------------------------7.a Salary ------------------------------");

console.log("Employee original salary in main object");
console.log(employee_info.salary);

console.log("Employee salary in clone object ===>");
console.log(new_employee.salary);
console.log("----------------------------- 7.b Country ---------------------------");
// console.log("Employee original country value ===>");
// console.log(employee_info.address.country);
// console.log(new_employee.country);
// console.log("---------------------------7.a Salary ----------------------------");
// console.log("Employee original salary in main object ==>",employee_info.salary.july_month);
// console.log("Employee salary in clone object ===>",new_employee.salary.july_month);
console.log("----------------------------- 7.b Country ---------------------------");
console.log("Employee original country value ===>", employee_info.address.country);
console.log("Employee country in clone object ===>",new_employee.country);
