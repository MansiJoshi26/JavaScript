function RemoveDuplicate(arr){
  let unique=[]
  let duplicate= {}
  for(let i=0;i<arr.length;i++){
    if(duplicate[arr[i]]){
      duplicate[arr[i]]++
    }else{
      duplicate[arr[i]] = 1;
      unique.push(arr[i])
    }
  }
  return unique
  
}
console.log(RemoveDuplicate([1,1,2,3,4,1,4]))


function RemDuplicate(arr){
  return [...new Set(arr)]
}
console.log(RemDuplicate([1,2,3,3,4,5,5]))