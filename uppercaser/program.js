var http= require('http'),
map = require('through2-map');

var server= http.createServer(function(req, res){
  req.on('error', function(err){console.log(err);});
  if(req.method!=='POST') return res.end('Wrong method');
  //pipe the request to through map
  //which maps all chunks to uppercase
  //which pipes it to response
  
  req
  .pipe(map(up))
  .pipe(res);

  function up(data){
    return data.toString().toUpperCase();
  }
});

server.listen(process.argv[2]);