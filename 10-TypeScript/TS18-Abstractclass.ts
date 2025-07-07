abstract class Person5
 {   name:string;
     constructor(name:string){
         this.name=name;
     }
  display5():void{
       console.log(this.name);        
   }
   abstract find(string: string):Person5;
 }
 class Employee5 extends Person5
 {   empCode:number;
    constructor(name,code){
        super(name);
        this.empCode=code;
    }
     display():void{
        console.log("Hello Employee5")
     }
    find(name:string):Person5 {
        return new Employee5(name,1);
    }
 }
 let emp1 = new Employee5("Ramesh",100);
 emp1.display5(); 
 let emp2:Person5 = emp1.find("Rajesh");
 emp2.display5();
 let mp3 =new Employee5("Ramu",500);
 mp3.display();
