var fs= require('fs');

fs.readFile(process.argv[2], function(err, data){
  var str = data.toString();
  var count=0;
  for(var i in str){
    if(str[i]=='\n') count+=1;
  }
  console.log(count);
});