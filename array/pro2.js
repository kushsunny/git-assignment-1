//  $$-----> How to add two Array <-----$$

let arr=["aman", "la0",12,"amkd"];
let arr1=["jyoti","pawan",'shuru'];
let arr2=[...arr, ...arr1];
console.log(arr2)

//  **------count Even & Odd--------**

let arr7=[1,4,2,5,6,8,7,13,198]
let even_count=0; 
let odd_count=0; 

for (let i=0; i<arr.length; i++){
  if(arr[i]%2==0){
    // even_count+=arr[i]
    even_count++
  }else {
    // odd_count+=arr[i]
    odd_count++
  }
}
console.log("even:",even_count,"odd:",odd_count)