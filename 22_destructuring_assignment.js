console.log("Name : Anuradha Patil");
console.log("Assignment No : 2");
console.log("-------------------------------------------------------------------------------------------------------");

class Employee {
   constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company) {
this.emp_id = emp_id;
this.emp_name = emp_name;
this.emp_dept = emp_dept;
this.emp_salary = emp_salary;
this.emp_company = emp_company;
}

}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

// 
 const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
// 1.Find the all the employees working in "TCS" and log only employee names and company name on console
console.log(`Q.1 Find the all the employees working in "TCS" and log only employee names and company name on console`);

 for (const employee of arrayEmployees) {
    if (employee.emp_company == "TCS") {
        console.log(`Employee Name : ${employee.emp_name}, Company Name : ${employee.emp_company}`);
    }
}

console.log("---------------------------------------------------------------------------------------------------------");
// 2. Find the "Finance" department employees, log only department and employee name on console
console.log(`Q.2 Find the "Finance" department employees, log only department and employee name on console`);

for (const employee of arrayEmployees) {
    if (employee.emp_dept == "Finance") {
        console.log(`Department : ${employee.emp_dept}, Employee Name : ${employee.emp_name}`);
    }
}

console.log("---------------------------------------------------------------------------------------------------------");
// 3. Find the employees whose name start with "R" and complete employee details on console
console.log(`Q.3 Find the employees whose name start with "R" and complete employee details on console`);

 for (const employee  of arrayEmployees) {
if (employee.emp_name.startsWith("R")) {
    console.log(`Employee id : ${employee.emp_id}, Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company Name : ${employee.emp_salary} `);
}
 }


console.log("-----------------------------------------------------------------------------------------------------------");
// 4. Find the employees whose salary is greater than 70000, and emp name, company and salary on console
console.log(`Q.4 Find the employees whose salary is greater than 70000, and emp name, company and salary on console`);

for (const employee of arrayEmployees) {
    if (employee.emp_salary > 70000) {
        console.log(`Employee Name : ${employee.emp_name}, Employee Company : ${employee.emp_company}, Employee Salary ${employee.emp_salary}`);
    }
}

console.log("------------------------------------------------------------------------------------------------------------");
// 5. Find the emp's whose salary greater than or equal 50000 and from "IT" department, log on console
console.log(`Q.5 Find the emp's whose salary greater than or equal 50000 and from "IT" department, log on console`);

for (const employee of arrayEmployees) {
    if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
        console.log(`Employee Salary : ${employee.emp_salary}, Department : ${employee.emp_dept}`);
    }
}

console.log("------------------------------------------------------------------------------------------------------------");
// 6.Find out all the employees from company "Infy" and log complete employee details on console
console.log(`Q.6 Find out all the employees from company "Infy" and log complete employee details on console`);

for (const employee of arrayEmployees) {
    if (employee.emp_company == "Infy") {    //emp_id, emp_name, emp_dept, emp_salary, emp_company
        console.log(`Employee id : ${employee.emp_id}, Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company Name : ${employee.emp_salary} `);
    }
}