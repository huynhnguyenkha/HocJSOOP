function timmaxArr(arr) { 
    if(arr.length == 0) 
        return null;
     let max = arr[0];
     for(let i = 1; i< arr.length; i++)  
         {
            if(arr[i] >  max)
               {
                max = arr[i];
               }
         }
         return max;
} 
console.log(" so lon nhat trong mang la: " + timmaxArr([1,5,2,8,99]));