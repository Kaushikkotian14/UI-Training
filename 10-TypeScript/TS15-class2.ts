class Greeter{
    greeting: string;
    constructor(message:string){
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let g = new Greeter("World");
let t = g.greet();
console.log(t); // Output: Hello, World