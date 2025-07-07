// Read the data from file 
const myfs=require("fs");
                                   //Welcome to MyNodeJS Data
const mybuf_data = myfs.readFileSync("myData.txt");
console.log(mybuf_data);

const myorgData = mybuf_data.toString();
console.log(myorgData);
