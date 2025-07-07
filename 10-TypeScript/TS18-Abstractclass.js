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
var Person5 = /** @class */ (function () {
    function Person5(name) {
        this.name = name;
    }
    Person5.prototype.display5 = function () {
        console.log(this.name);
    };
    return Person5;
}());
var Employee5 = /** @class */ (function (_super) {
    __extends(Employee5, _super);
    function Employee5(name, code) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    Employee5.prototype.display = function () {
        console.log("Hello Employee5");
    };
    Employee5.prototype.find = function (name) {
        return new Employee5(name, 1);
    };
    return Employee5;
}(Person5));
var emp1 = new Employee5("Ramesh", 100);
emp1.display5();
var emp2 = emp1.find("Rajesh");
emp2.display5();
var mp3 = new Employee5("Ramu", 500);
mp3.display();
