var arr= process.argv;
if (arr.length > 2){
var i=2, sum=0;
while(1==1){
sum+= +arr[i];
i++;
if(!arr[i])
break;
}
}

console.log(sum)