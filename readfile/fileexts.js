var fs= require('fs');
var path= require ('path');
var reqext= process.argv[3];

fs.readdir(process.argv[2], function(err, data){
  //var p = data.toString();
  data= data.filter(function(val){
    //console.log(path.extname(val).slice(1));
    return path.extname(val).slice(1)==reqext
  });

  for(var i in data){
    console.log(data[i]);
  }
});