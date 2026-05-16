/*Find the middle element of an array.*/
function MiddleElement(arr){
  let mid=0
  let arrLen =arr.length-1
  if (arrLen%2==0){
    mid= arrLen/2
  }
  else{
    mid = (arrLen+1)/2
  }
  console.log(arr[mid]);
  
}
MiddleElement([1,2,3,4,5,6,7,8])



function Mid(arr){
  let mid= Math.floor(arr.length/2)
  console.log(arr[mid])
}

Mid([1,2,3,4,5,6,7,8])