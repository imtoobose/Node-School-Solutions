var http   = require('http'),
    urllib = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){
  req.on('error', function(error){ 
    console.log(error); 
  });
  res.writeHead('200', {'Content-Type':'application/json'});

  if(req.method=='GET'){
    var q   = (urllib.parse(req.url, true)),
      query = q.query,
      fin   = null;

    if(query.iso){
      var d = new Date(query.iso);
      if(q.pathname==='/api/parsetime'){
        fin   = JSON.stringify({
          "hour"   : d.getHours(),
          "minute" : d.getMinutes(),
          "second" : d.getSeconds(),
        });
      }
      else if(q.pathname==='/api/unixtime'){
        fin= JSON.stringify({
          "unixtime": d.getTime()
        });
      }
      else fin=null;
    }

    if(q.pathname=='/api/unixtime'){
      if(fin)
        res.end(fin);
      else
        res.end('An error occurred');
    }
    else if(q.pathname=='/api/parsetime'){
      if(fin)
        res.end(fin);
      else 
        res.end('An error occurred');
    }

    else{
      console.log('invalid query');
    }
    res.end();
  }

  else{
    res.end('wrong method');
  }
});

server.listen(port);