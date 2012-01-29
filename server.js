var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var method = req.method;
    var urls = url.parse(req.url, true);
    var pathname = urls.pathname;
    var queries = urls.query;


    if (method == 'GET') {
        if (pathname == '/favicon.ico') {
            res.writeHead(404, 'Not found');
            res.end();
        } else if (pathname == '/' || pathname == '/list') {
            fs.readFile('list.html', 'binary', function (err, data) {
                if (err) throw err;
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data, 'binary');
                res.end();
            });
        } else if (pathname == '/jquery.js') {
            fs.readFile('jquery.js', 'binary', function (err, data) {
                if (err) throw err;
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data, 'binary');
                res.end();
            });
        }
    }else if (method == 'POST') {
        if (pathname = '/new') {
            req.on('data', function(data) {
                var buf = "" + data;
                var b = querystring.parse(buf);
                if (b.title) {
                    fs.writeFile('blogs/' + b.title, b.content, function(err) {
                        if (err) throw err;
                    res.writeHead(200, {'Content-Type':'text/plain'});
                    res.end();
                    });
                }
            });
        }
    }
});

server.listen(1337, '127.0.0.1');

console.log('start at 1337');
