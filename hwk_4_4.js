function number (num){
  let  num1 = ""
  if(num[0] ==="+"){
    (num = num.slice(1))
  }
  for(let i = 0; i< num.length; i++){
    if(num[i] === " "){
      continue
    } else {
      num1 += num[i]
    }
    
    if(num1[i] === "+")  {
      return "bad number"
    }
  }
  
  if(num1.length !== 10){
    return "bad number"
  }
  return num1
}