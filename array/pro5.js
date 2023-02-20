let arr=[1,3,5,-8,-44,-52,9];

for (let i=0; i<arr.length; i++){
  if(arr[i]<0){
    arr[i]=0;
  }
}
console.log(arr)
