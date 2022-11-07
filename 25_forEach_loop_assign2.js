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

// const array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
let map_employees = new Map();
map_employees.set(22, emp_anil);
map_employees.set(33, emp_radha);
map_employees.set(55, emp_rishi);
map_employees.set(66, emp_sonali);
map_employees.set(77, emp_monika);
map_employees.set(88, emp_viny);
map_employees.set(99, emp_mahi);

console.log("--------------------------- log the details of map_employees using forEach() loop -------------------------------");
map_employees.forEach( (key, value) => {
console.log(` ${emp_anil.emp_id} ==> Name : ${emp_anil.emp_name }, Dept : ${emp_anil.emp_dept}, Salary : ${emp_anil.emp_salary}, Company : ${emp_anil.emp_company}`);
});

map_employees.forEach( (key, value) => {
    console.log(`${emp_radha.emp_id} ==>  Name : ${emp_radha.emp_name}, Dept : ${emp_radha.emp_dept}, Salary : ${emp_radha.emp_salary}, Company : ${emp_radha.emp_company}`);
});

map_employees.forEach( (key, value) => {
    console.log(`${emp_rishi.emp_id} ==>  Name : ${emp_rishi.emp_name}, Dept : ${emp_rishi.emp_dept}, Salary : ${emp_rishi.emp_salary}, Company : ${emp_rishi.emp_company}`);
});

map_employees.forEach( (key, value) => {
    console.log(`${emp_sonali.emp_id} ==>  Name : ${emp_sonali.emp_name}, Dept : ${emp_sonali.emp_dept}, Salary : ${emp_sonali.emp_salary}, Company : ${emp_sonali.emp_company}`);
});

map_employees.forEach( (key, value) => {
    console.log(`${emp_monika.emp_id} ==>  Name : ${emp_monika.emp_name}, Dept : ${emp_monika.emp_dept}, Salary : ${emp_monika.emp_salary}, Company : ${emp_monika.emp_company}`);
});

map_employees.forEach( (key, value) => {
    console.log(`${emp_viny.emp_id} ==>  Name : ${emp_viny.emp_name}, Dept : ${emp_viny.emp_dept}, Salary : ${emp_viny.emp_salary}, Company : ${emp_viny.emp_company}`);
});

map_employees.forEach( (key, value) => {
    console.log(`${emp_mahi.emp_id} ==> Name : ${emp_mahi.emp_name}, Dept: ${emp_mahi.emp_dept}, Salary : ${emp_mahi.emp_salary}, Company :${emp_mahi.emp_company}`);
});


