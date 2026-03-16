function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = flattenArray(arr[i]);
      result = result.concat(flat);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flattenArray([1,[2,3],[4,[5,6]]]));