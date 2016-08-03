var fs= require('fs');
var path= require('path');

module.exports= function(dirname, extension, callback){
  if(!(dirname && extension && callback)){
    callback({"name":"less arguments"});
    return;
  }

  fs.readdir(dirname, function(err, data){
    if(err) {
      callback(err);
    }
    
    else{
      data= data.filter(function(woo){
        return path.extname(woo).slice(1)==extension;
      })
      callback(null, data);
    }
  });
}