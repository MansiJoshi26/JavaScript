function SecondLargest(arr){
  let max=arr[0]
  let secondLargest=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      secondLargest=max
      max=arr[i]
      
    }
    else if(arr[i]>secondLargest && arr[i]!=max){
      secondLargest=arr[i]
    }
  }
  return secondLargest
}
console.log(SecondLargest([1,2,35,6,7]))