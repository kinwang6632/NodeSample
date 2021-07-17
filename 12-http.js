const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<h1>Welcome to my home page</h1>`)
        res.end();
        return;
    }
    if(req.url === '/about') {
        res.write(`<h1>about</h1>`);
        res.end();
        return ;
    }
    res.write('<h1>Opos</h1>');
    res.end();
    //res.end(`<h1>Opos</h1>`)
});
server.listen(5000);