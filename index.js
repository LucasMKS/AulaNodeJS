var express = require('express');
var app = express();
/*
var port = 8030;
var hostname = '127.0.0.1';
*/
var port = process.env.PORT;

//http: //127.0.0.1:8030
app.get('/', function(req, res) {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.send('Boa noite turma de SD');
});
//http://127.0.0.1:8030/info
app.get('/info', function(req, res) {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.send('Esta é a página de informação.');
});
app.listen(port, function() {
console.log(`O servidor foi iniciado`);
});
