// Create web server
// Run: node comments.js
// Access: http://localhost:3000/
// Access: http://localhost:3000/comments

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (pathname === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ comments: [{ name: 'test', message: 'test' }] }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(3000, () => console.log('Server is running on http://localhost:3000/'));