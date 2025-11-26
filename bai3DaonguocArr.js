function mangdaonguoc(arr) 
  {
    let arrnew = [];
    for(let i =arr.length -1; i >= 0; i--)
    {
        arrnew.push(arr[i]);
    }
    return arrnew;
  }
  console.log(mangdaonguoc([1,3,4,6,7,100]));
