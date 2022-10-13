import http from 'http';
import fs from 'fs';

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("Server request");
    
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
});

server.listen(8000, () => console.log("Connected Hello World!"));