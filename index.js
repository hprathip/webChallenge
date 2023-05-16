const http = require('http');

// Define the server host and port
const host = 'localhost';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Handle incoming requests
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end("HOME PAGE");
    
});

// Start the server
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
