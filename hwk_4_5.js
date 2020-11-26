function strLengthRepeat(str1,str2){
debugger
  let min;
  let max;
  let finalString = "";
  if(str1.length > str2.length){
    max = str1;
    min = str2;
  } else {
    max = str2;
    min = str1;

  }
  for(let i = min.length; i <=max.length; i++){
       for(let j = 0; j < min.length;j++){
          finalString += min[j]
          if(finalString.length === max.length) {
             return finalString
          }
       }
      
  }
  
}