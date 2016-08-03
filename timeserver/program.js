var net= require('net');

function pad(val){
  if(val<10){
    return '0'+ val;
  }
  else{
    return ''+val;
  }
}

function nowTime(){
  var date  = new Date();
  var year  = pad(date.getFullYear()),
      month = pad(date.getMonth()+1),
      date1 = pad(date.getDate()),
      hours = pad(date.getHours()),
      min   = pad(date.getMinutes());
  return year+'-'+month+'-'+date1+' '+ hours + ':'+ min+'\n';

}

var server= net.createServer(function(socket){
  socket.end(nowTime());
});

server.listen(process.argv[2]);