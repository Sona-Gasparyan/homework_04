function remove (arr, letter){
 letter = letter.toUpperCase(); 
  let arr1 = []
  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i][0].length;j++){
      if(arr[i][0] === letter){
        continue
      } else {
        arr1.push(arr[i])  
      }
      
    }
  }
return arr1
}