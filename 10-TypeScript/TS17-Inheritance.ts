class Person1{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee1 extends Person1 {
    empcode: number;
    constructor(name: string, empcode: number) {
        super(name); // Call the constructor of the base class
        this.empcode = empcode;
    }
    display():void {
        console.log("Employee Name: "+ this.name+ " Employee Code: " +this.empcode);
    }
}
let e1 = new Employee1("Kaushik Kotian", 101);
e1.display(); // Output: Employee Name: Kaushik Kotian Employee Code: 101