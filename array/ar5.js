let arr=[1,2,3,-1,-2,-3]
for (let i=0; i<arr.length; i++){
  if(arr[i]<0){
    arr[i]="-ve value"
  }
}
console.log(arr)