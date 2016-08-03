var http= require('http'),
fs= require('fs');

var t_file= process.argv[3],
    port  = process.argv[2];

var server= http.createServer(function(request, response){
  response.writeHead(200);
  fs.createReadStream(t_file).pipe(response);
});

server.listen(port);