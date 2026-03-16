function Duplicate(str){
  let seen=new Set()
  let duplicate= new Set()
for (let num of str){
  if(seen.has(num)){
    duplicate.add(num)
  }
  else{
    seen.add(num)
  }
}
return [...duplicate]
}
console.log(Duplicate([11,11,2,3,4,5,4]))