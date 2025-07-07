class Employee{
    empcode: number;
    empname: string;
    constructor(empcode: number, empname: string) {
        this.empcode = empcode;
        this.empname = empname;
    }
}
let e = new Employee(101, "Kaushik Kotian");
console.log("Employee Code: " + e.empcode);
console.log("Employee Name: " + e.empname);