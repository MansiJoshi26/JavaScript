function ZeroToEnd(arr){
  let zero=0;
  for(let i=0;i<arr.length;i++){
      if(arr[i]!==0){
        arr[zero]=arr[i]
        zero++
      }
  }
  while(zero<arr.length){
    arr[zero]=0
    zero++
  }
  return arr
}
console.log(ZeroToEnd([1,0,2,0,4,0,5,7]))