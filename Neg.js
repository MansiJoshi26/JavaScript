function Neg(arr) {
  let count = 0;
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr1[count] = arr[i];
      count++;
    }
  }
  console.log(count);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arr1[count] = arr[i];
      count++;
    }
  }
  return arr1;
}

console.log(Neg([1, 2, -3, -4, 0, 5]));

function Neg1(arr){
  let left = 0;

  for(let i=0;i<arr.length;i++){
    if(arr[i] < 0){
      let temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;
      left++;
    }
  }

  return arr;
}

console.log(Neg1([1,2,-3,-4,0,5]));