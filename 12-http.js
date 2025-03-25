// HTTP Module
// Used to setup an own server

const http = require('http');

// here req => represents incoming requests
// res => represents response to the incoming requests
const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.end('Welcome to our homepage');
        return;
    }
    if(req.url === '/ab'){
        res.end('Here is our short history!');
        return;
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `
    ); 
});

server.listen(5000, () => {
    console.log('Server is running on port 5000...');  
})