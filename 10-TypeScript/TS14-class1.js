var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person;
}());
var p = new Person("Kaushik", "Kotian");
console.log("First Name: " + p.fname);
console.log("Last Name: " + p.lname);
