const http = require('http')
const fs = require('fs');
const server = http.createServer((req,res) => {
    const text  = fs.readFileSync('./content/big.txt',{encoding:'utf8'});
    res.end(text);
})

server.listen('5000')