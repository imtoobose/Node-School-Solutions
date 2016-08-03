var fs= require('fs');

var buf = fs.readFileSync(process.argv[2]);
var val = buf.toString();
var count=0;
for (var i in val){
  if(val[i]=='\n') count+=1;
}

console.log(count);