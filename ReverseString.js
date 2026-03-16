//1 

function ReverseString(str){
  let result=''
  for (let i=str.length-1;i>=0;i--){
    result+=str[i]
  }
  return result
}
console.log(ReverseString("Hello"))

//2

function RevStr(str){
  return str.split("").reverse().join("")
}
console.log(RevStr("Mansi"))

