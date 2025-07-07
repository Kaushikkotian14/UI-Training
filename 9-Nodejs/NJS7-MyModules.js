// Status codes : 200 Success ,  404 : Server Error , 500 Server Error  
// >nodemon NJS13-MyModules.js
// >http://localhost:9000/

// Require the http module
var myhttp = require('http');

// Our custom module
var dt = require('./myModule.js');

// Create an HTTP Server
myhttp.createServer(function(req,res){
    //Set the response header
    res.writeHead(200,{'Content-Type': 'text/html'});

    // Use the custom moule to get the data and time
    res.write("The data and time is currnetyly " +dt.myDateTime());
    res.end();
    // Server listen on port 9000
}).listen(9000); 