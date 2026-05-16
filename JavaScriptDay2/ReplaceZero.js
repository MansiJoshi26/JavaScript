let arr = [1, -2, 3, -4, 5, -6];
let replace = [];

function ReplaceZero(arr){
  for(let i = 0; i < arr.length; i++){
    
    if(arr[i] < 0){
      replace[i] = 0;
    }
    else{
      replace[i] = arr[i];
    }

  }
  return replace;
}

console.log(ReplaceZero(arr));
