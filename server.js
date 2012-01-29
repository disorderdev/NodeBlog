var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var server = http.createServer(function(req, res) {
    var method = req.method;
    var urls = url.parse(req.url, true);
    var pathname = urls.pathname;
    var queries = urls.query;

    if (method == 'GET') {
        if (pathname == '/' || pathname == '/list') {
            fs.readFile('list.html', 'binary', function (err, data) {
                if (err) throw err;
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data, 'binary');
                res.end();
            });
        } else {
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end();
        }
    }else {
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end();                    
    }
});

server.listen(1337, '127.0.0.1');

console.log('start at 1337');
