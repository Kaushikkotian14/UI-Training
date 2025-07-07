var Employee7 = /** @class */ (function () {
    function Employee7(empCode, empName) {
        var _this = this;
        this.display = function () { return console.log("Employee Code: " + _this.empCode + ", Employee Name: " + _this.empName); };
        this.empCode = empCode;
        this.empName = empName;
    }
    return Employee7;
}());
var emp7 = new Employee7(101, "Kaushik Kotian");
emp7.display(); // Output: Employee Code: 101, Employee Name: Kaushik Kotian
