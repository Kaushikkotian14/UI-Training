function processData(x: any, y:any){
   return x+y;
}

let result1 : any;
let result2 : any;
result1 = processData(5, 10); // number
console.log(result1); // 15
result2 = processData("Hello, ", "World!"); // string
console.log(result2); // Hello, World!