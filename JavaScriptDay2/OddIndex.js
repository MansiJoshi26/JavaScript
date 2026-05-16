/*Print elements at odd indexes.*/
function OddIndex(arr){
  for (let i=0;i<arr.length;i++){
    if (i%2!==0){
      console.log(arr[i])
    }
  }
}
OddIndex([1,2,3,4,5,6])