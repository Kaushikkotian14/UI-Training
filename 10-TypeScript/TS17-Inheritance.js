var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, empcode) {
        var _this = _super.call(this, name) || this; // Call the constructor of the base class
        _this.empcode = empcode;
        return _this;
    }
    Employee1.prototype.display = function () {
        console.log("Employee Name: " + this.name + " Employee Code: " + this.empcode);
    };
    return Employee1;
}(Person1));
var e1 = new Employee1("Kaushik Kotian", 101);
e1.display(); // Output: Employee Name: Kaushik Kotian Employee Code: 101
