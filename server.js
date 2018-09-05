var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request,response) {
	fs.readFile('test.html',function (error, data){
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(data);
	});
});
server.on('request', function (code) {
	console.log("요청 On");
});
server.on('connection', function (code) {
	console.log("연결 On");
});

server.listen(52273,function() {
	console.log('서버 Running at http://localhost:52277');
});