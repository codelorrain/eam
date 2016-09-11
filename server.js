var http = require("http");
var url = require('url');

const hostname = '127.0.0.1';
const port = 8080;

function start() {
    const server = http.createServer((request, response) => {
        console.log('Request for ' + pathname +
                    ' received @ server :: '+ 
                    hostname + ':' + port);
        var pathname = url.parse(request.url).pathname;
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('EAM - The Site');
    });

    server.listen(port, hostname, () => {
        console.log('Server running @ http://' + 
                    hostname + ':' + port +'/');
    });
}

exports.start = start;