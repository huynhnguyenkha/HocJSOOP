function BubbleSort(arr) 
    {
      let n = arr.length;
      for( let i =0; i < n -1; i++) // i =0; i< 5-1 =>> i<4; i++
         {
            for( let j =0; j < n - i -1; j++) //  j =0; j< 5-0(i = 0)-1 =>> j<4; j++
                                               // j =0; j< 5-1(i=1)-1 =>> j<3; j++ 
                                               // j =0; j< 5-2(i=2)-1 =>> j<2; j++
                                               // j =0; j< 5-3(i=3)-1 =>> j<1; j++
                                               // j =0; j< 5-4(i=4)-1 =>> j<0; j++
                                               // so sanh phan tu j va j+1
               {
                  if( arr[j] > arr[j +1])   // neu phan tu j lon hon phan tu j+1 thi doi cho
                                            // neu khong thi khong can doi cho
                                            // sap xep tang dan
                                            // sap xep giam dan thi doi dau hon
                                          
                     {
                        let temp = arr[j];
                        arr[j] = arr[j +1];
                        arr[j +1] = temp;
                     }
               }
         }
         return arr;
    }
  let mangTest = [12,3,7,4,8,90];
  console.log(" Mang truoc khi sap xep: " + mangTest);
  let mangDaSapXep = BubbleSort(mangTest);
  console.log(" Mang sau khi sap xep: " + mangDaSapXep);



















  function bubblesort(arr) { 
      let n = arr.length;
      for( let i = 0; i < n-1; i++)
          { 
            for( let j = 0; j < n-i-1; j++ )
                  {
                    if( arr[j] > arr[j+1])
                    {
                         let temp =arr[j];
                         arr[j] = arr[j+1];
                         arr[j+1] = temp;
                    }
                  }
          }
          return arr;
  }
  let mangthutest = [1,22,1,4,67,34,66,0];
  console.log("Mang truoc khi sap xep: " + mangthutest);
  let mangdasp = bubblesort(mangthutest);
    console.log("Mang sau khi sap xep: " + mangdasp);   