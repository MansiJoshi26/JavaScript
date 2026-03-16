function Max(arr){
  let max=arr[0]
  for (let i=0;i<arr.length;i++){
    if(max<arr[i]){
      max=arr[i]
    }
  }
  return max
}

console.log(Max([1,2,3,99,4]))