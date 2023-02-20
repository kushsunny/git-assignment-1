let x=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
let count=0;

for (let i=0; i<x.length; i++){
  if (x[i]%2==0){
    sum=sum+x[i];
    count++;
  }
}
console.log(sum/count)