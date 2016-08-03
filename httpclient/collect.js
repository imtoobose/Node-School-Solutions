var http= require('http'),
    bl = require('bl');

var count =0,
ans= ["", "", ""];

try{
  if(process.argv.length< 5) throw {"error":"insufficient arguments"};
  var urls= process.argv.slice(2);
  for (var i in urls){
    getData(urls[i], i);
  }
}
catch(err){
  console.log(err);
}

function getData(url, index){
  http.get(url, function(response){
    response.pipe(bl(function(err, data){
      if (err) console.log(err);
      else{
        //console.log(count, ans, index);
        //console.log(data.toString());
        ans[+index]= data.toString();
        if (count==2){
          getResult();
        }
        else{
          ++count;
        }
      }
    }));
  });
}

function getResult(){
  for(var j in ans)
    console.log(ans[j]);
}