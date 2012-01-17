var http = require('http');

var server = http.createServer(function(req, res) {
     res.writeHead(200, {'Content-Type':'text/plain'});
     res.write('OK');
     res.end();
});

server.listen(1337, '127.0.0.1');

console.log('start at 1337');
