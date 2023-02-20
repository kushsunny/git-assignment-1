//  ***---------How to find min & max value ---------***

let arr=[1,2,-70,3,-30,4,5];

let min= +Infinity
let max= -Infinity

for (let i=0; i<arr.length; i++){
 if(arr[i]<min){
   min=arr[i];
 }
  if(arr[i]>max){
    max=arr[i];
  }
}
console.log(min,max)
