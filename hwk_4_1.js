function getEvenNumbers(first, last){
  const numbers=[];
debugger
  
  for(let i=first; i<=last;i++){
    let isEven=true;
    const digits=(""+i).split("");
    
    for(let j=0; j<digits.length;j++){
      isEven = isEven && (digits[j]%2 ===0);
    }
    
    if(isEven === true) {
        numbers.push(i);
    }
  }
  
  if(numbers.length>0){
    console.log(numbers)
  }else{
    console.log("Such numbers doesn't exist")
  }
}
getEvenNumbers(19,42)