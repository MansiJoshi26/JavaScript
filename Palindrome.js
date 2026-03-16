function Palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      console.log("not a palindrome");
      return false;
    } 
    
    left++;
    right--;
  }
  console.log("palindrome")
  return true;
}
console.log(Palindrome("madoam"));
