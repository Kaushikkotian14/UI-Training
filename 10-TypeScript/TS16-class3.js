var Employee = /** @class */ (function () {
    function Employee(empcode, empname) {
        this.empcode = empcode;
        this.empname = empname;
    }
    return Employee;
}());
var e = new Employee(101, "Kaushik Kotian");
console.log("Employee Code: " + e.empcode);
console.log("Employee Name: " + e.empname);
