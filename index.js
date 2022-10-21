/*Criando servidor e testando browser*/
var http = require('http');

http.createServer(function (req, res) {
  console.log("Servidor online");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Boa noite");
  console.log("Escreveu");
  res.end();
  console.log("Finalizou");
}).listen(8082);