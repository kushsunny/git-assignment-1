// how to print an array in reverse order.
let arr=[12,"sunny","ankit",143,"2+3=5"];
let a=[];
for (let i=arr.length-1; i>=0; i--){
  a.push(arr[i]);
}
console.log(a)