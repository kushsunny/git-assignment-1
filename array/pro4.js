let character=("c")
let lowerCase=["a","b","c","d"];
let upperCase=["A","B","C","D"];
for(let i=0; i<lowerCase.length; i++){
  if (character==lowerCase[i]){
    character=upperCase[i];
  }
}
console.log(character);