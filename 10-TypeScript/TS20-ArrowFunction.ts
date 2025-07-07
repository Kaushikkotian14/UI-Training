class Employee7{
    empCode;
    empName;

 constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }

    display=()=>console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
}

let emp7 = new Employee7(101, "Kaushik Kotian");
emp7.display(); // Output: Employee Code: 101, Employee Name: Kaushik Kotian