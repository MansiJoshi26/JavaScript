function EvenIndex(arr){
  for (let i =0;i<arr.length;i++){
    if(i%2==0){
      console.log(arr[i])
    }
  }
}
EvenIndex([1,2,3,4,5])
/*Print elements at even indexes.*/