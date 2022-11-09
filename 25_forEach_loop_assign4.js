
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
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

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("----------------------------------------------------------------------------------------------------------------------------------------");
console.log(` Q.1 Find out the "TCS" employee details and log only name and company on console`)
arrayEmployees.forEach( (employee) => {
if (employee.emp_company == "TCS") {
    console.log(`"TCS" Employee Details : ${employee.emp_name}, ${employee.emp_company}`);
}
});

console.log("-----------------------------------------------------------------------------------------------------------------------------------------");
console.log(` Q.2 Find the employees with salary greater than or equal 50000 (Log the all employee details on console)`);
arrayEmployees.forEach((employee) => {
    if (employee.emp_salary >= 50000) {
      console.log(`Employee Id : ${employee.emp_id},Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`);  
    }
});

console.log("-----------------------------------------------------------------------------------------------------------------------------------------");
console.log(` Q.3 Find the sum of all employees salary and log on console`);
let sum = 0;
arrayEmployees.forEach((employee) => {
    sum = sum + employee.emp_salary;
});
console.log(sum);

console.log("-------------------------------------------------------------------------------------------------------------------------------------------");
console.log(` Q.4 Find the average salary and log on console`); // (average = Total salary / Number of employees)

index= arrayEmployees.length;
arrayEmployees.forEach((employee) => {
    average = sum / index ;
});
console.log(average);

console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
console.log(` Q.5 Find the "IT" and "HR" department employees whose salary is greater than or equal to 75000 and log complete employee details on console `)
arrayEmployees.forEach((employee) => {
    if (employee.emp_dept=="IT" && employee.emp_dept=="HR" || employee.emp_salary >= 75000) {
     console.log(`Employee ID : ${employee.emp_id}, Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`);   
    }
});
