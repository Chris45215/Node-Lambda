const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

fs.readFile('index2.html', (err, html) => {
	if (err){
		throw err;
	}
	
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end('Hello World!');
	});

	server.listen(port, hostname, () => {
		console.log('Server started on port ' +port);
	});
});
