function filterRange(arr,a,b){
  let arr1 = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]> a && arr[i] < b){
        arr1.push(arr[i])
    }
  } 
  return arr1;
}

filterRange([1, 10, 20, 30], 9, 23)