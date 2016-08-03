var http= require('http'),
    bl  = require('bl');

http.get(process.argv[2], function(response){
  response.pipe(bl(function(err, data){
    if(err) console.log(err);
    else{
      console.log(data.length);
      console.log(data.toString());
    }
  })).on('error', function(error){
    console.log(error);
  });
});