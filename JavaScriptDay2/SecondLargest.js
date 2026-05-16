/* Find the second largest element in an array */

function SecondLargest(arr){

  let max = -Infinity;
  let second = -Infinity;

  for(let i = 0; i < arr.length; i++){

    if(arr[i] > max){
      second = max;
      max = arr[i];
    }
    else if(arr[i] > second && arr[i] !== max){
      second = arr[i];
    }
  }

  console.log("Largest :", max);
  console.log("Second Largest :", second);
}

SecondLargest([1,2,3,4,5,6]);