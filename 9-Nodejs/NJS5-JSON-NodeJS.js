// JSON DATA wirte 
const myfs=require("fs");
const bioData = {
    name :"Rajesh",
    age :24,
    skill : "NodeJS Programmer"
}
console.log(bioData);

 var myData = JSON.stringify(bioData);

 console.log("JavaScript data :",myData);

myfs.writeFile("myjsondata.json",myData,(err)=>{
   console.log("Process Completed");
});
