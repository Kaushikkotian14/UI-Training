class Person{
    fname;
    lname;
    constructor(fname:string,lname:string){
        this.fname = fname;
        this.lname = lname;
    }
}
let p = new Person("Kaushik", "Kotian");
console.log("First Name: " + p.fname);
console.log("Last Name: " + p.lname);