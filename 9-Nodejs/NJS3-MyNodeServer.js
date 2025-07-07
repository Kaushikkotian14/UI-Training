const myhttp= require('http');

const myserver = myhttp.createServer((req, res) => {
    res.end('Hello form server is Running : : Kaushik\n');
})

myserver.listen(3000, () => {
    console.log('Server is running on port 3000');
})