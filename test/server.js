const http = require('http');

http.createServer(function(request, response){
  if (req.url === '/OK') {
    console.log('Inbound "OK" request being processed...');
    response.writeHead(200);
    response.end();
  } else {
    
  }
}).listen(3000, function(){
  console.log('listening on port 3000');
})