const http = require("http");

http
	.createServer(function (request, response) {
		if (request.url === "/OK") {
			console.log('Inbound "OK" request being processed...');
			response.writeHead(200);
			response.end();
		}
		if (request.url === "/Bad-Request") {
			console.log("Bad request");
			response.writeHead(400);
			response.end();
		}
		if (request.url === "/Created") {
			console.log("Created");
			response.writeHead(201);
			response.end();
		}
		if (request.url === "/Forbidden") {
			console.log("Forbidden");
			response.writeHead(403);
			response.end();
		}
		if (request.url === "/Found") {
			console.log("Found");
			response.writeHead(302);
			response.end();
		}
		if (request.url === "/Gateway-Timeout") {
			console.log("Gateway Timeout");
			response.writeHead(504);
			response.end();
		}
		if (request.url === "/Internal-Server-Error") {
			console.log("Internal Server Error");
			response.writeHead(500);
			response.end();
		}
		if (request.url === "/Moved-Permanently") {
			console.log("Moved Permanently");
			response.writeHead(301);
			response.end();
		}
		if (request.url === "/Unauthorized") {
			console.log("Unauthorized");
			response.writeHead(401);
			response.end();
		} 
		if (request.url === "/Bonus/Redirect") {
			console.log("Redirect");
			response.writeHead(302, {'Location': 'http://localhost:3000/Forbidden'});
			response.end();
		}
		if (request.url === "/Bonus/Webpage") {
			console.log("Webpage");
			response.writeHead(404);
			response.end();
		}
		if (request.url === "/Bonus/Created") {
			console.log("");
			response.writeHead();
			response.end();
		}
    else {
			console.log("404");
			response.writeHead(404);
			response.end();
		}
	})
	.listen(3000, function () {
		console.log("listening on port 3000...");
	});
