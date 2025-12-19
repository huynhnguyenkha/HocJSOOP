function hccode(code) 
{ 
   let a = "";
   switch(code){ 
      case 1: 
       a = " huynh nguyen kha ";
       break;

       case 2: 
       a = " huynh nguyen kha dep trai";
       break;

       case 3: 
       a = " huynh nguyen kha cute";
       break;

       case 4: 
       a = " huynh nguyen kha dethw ";
       break;

       case 5: 
       a = " huynh nguyen kha hc code gioi";
       break;
   }
   return a;

}

console.log(hccode(2));

// newcode
let arrrnew = [];
for( let i = 0; i < 10; i++)
     { 
       arrrnew.push(i);
     }
      console.log(arrrnew);  

 // newcode 

 let arra = [ 1,5,7,8,9,5,5];
 let arrb = 0;
 for( let i = 0; i < arra.length; i++)
 { 
     arrb += arra[i];
 }
 console.log(arrb);
 // newcode
    function randomnew()
      { 
       return Math.random();
      }
      console.log(randomnew());
// newcode 
function randomRen(min, max)
{ 
    return Math.floor( Math.random() * ( max - min)) + min;
}

let newcode = randomRen(7,9);
console.log(newcode);
// newcode
function tong(a,b)
 {
    if( a == b)
         { 
            console.log(" so a = b");
         }else if( a < b)
         { 
            console.log( " so a < b");
         }else{ 
            console.log(" so a > b");
         }
 }
 console.log(tong(9,9));

//newcoede

// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const CountLable = document.getElementById("CountLable");
// let count = 0;
// const decreaseBtn = document.getElementById("decreaseBtn");

// increaseBtn.onclick = function()
// {
//    count++;
//    CountLable.textContent = count;

// }
// decreaseBtn.onclick = function()
//  { 
//    count--;
//    CountLable.textContent = count;
//  }

// resetBtn.onclick = function()
// {
//    count = 0;
//    CountLable.textContent = count;
// }


// nwecode


// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const mastercardbtn = document.getElementById("mastercardbtn");
// const paypalbtn = document.getElementById("paypalbtn");
// const mysubmit = document.getElementById("mysubmit");
// const subresult = document.getElementById("subresult");
// const paymentresult = document.getElementById("paymentresult");

 
// mysubmit.onclick = function()
// { 
//    if(mycheckbox.checked)
//      { 
//        subresult.textContent = ` Cảm ơn bạn đã đăng ký`;
//      }else{ 
//        subresult.textContent = ` Bạn chưa đăng ký`;
//      }

//      if(visabtn.checked)
//        {
//           paymentresult.textContent = ` Cảm ơn bạn đã chọn Visa`;
//        }else if(mastercardbtn.checked)
//        {

//          paymentresult.textContent = ` Cảm ơn bạn đã chọn MasterCard`;
//         }else if(paypalbtn.checked)
//         { 
//          paymentresult.textContent = ` Cảm ơn bạn đã chọn Paypal`;
//         }else{ 
//             paymentresult.textContent = `Bạn không chọn gói nào !!!!`;
//         }
// }


const mylabele = document.getElementById("mylabele");
const mygiam = document.getElementById("mygiam");
const myreset = document.getElementById("myreset");
const mytang = document.getElementById("mytang");
let dem;


mytang.onclick = function(){ 
   dem++;
   mylabele.textContent = dem;
}

mygiam.onclick = function(){ 
   dem--;
   mylabele.textContent = dem;
}

myreset.onclick = function(){ 
   dem = 0;
   mylabele.textContent = dem;
}





// const myVietcombank =document.getElementById("myVietcombank");
// const mySaccombank =document.getElementById("mySaccombank");
// const myMbbank =document.getElementById("myMbbank");
// const myArribank =document.getElementById("myArribank");

// const mycheckbox =document.getElementById("mycheckbox");
// const resultdangky =document.getElementById("resultdangky");
// const resulthongbao =document.getElementById("resulthongbao");
 
// const mysubmit = document.getElementById("mysubmit"); 


// mysubmit.onclick = function(){ 
//    if(mycheckbox.checked)
//    { 
//        resultdangky.textContent = ` Cảm ơn bạn đã nhấn đăng ký`;
//    }else{ 
//         resultdangky.textContent = ` Bạn chưa nhấn đăng ký`;
//    }
//    if(myVietcombank.checked)
//       { 
//       resulthongbao.textContent = ` Cảm ơn bạn đã chọn Vietcombank`;
//    }else if( mySaccombank.checked)
//    {
//        resulthongbao.textContent = ` Cảm ơn bạn đã chọn Saccombank`;
//    }else if(myMbbank.checked)
//    {
//        resulthongbao.textContent = ` Cảm ơn bạn đã chọn Mbbank`;
//    }else if( myArribank.checked)
//    {
//        resulthongbao.textContent = ` Cảm ơn bạn đã chọn Arribank`;
//    }else{ 
//       resulthongbao.textContent = ` Bạn chưa chọn loại ngân hàng nào`;
//    }
//  }

// newcode  

 const textbox = document.getElementById("textbox");
 const toFahrenheit = document.getElementById("toFahrenheit");
 const toCelsius = document.getElementById("toCelsius");
 const result = document.getElementById("result");
 let temp;

function convert(){ 
   if(toFahrenheit.checked)
   { 
      temp = Number(textbox.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1)+ "F";

   }else if(toCelsius.checked)
   { 
        temp = Number(textbox.value);
        temp =( temp -32) * (5/9);  
        result.textContent = temp.toFixed(1)+ "C";
   }
   else{ 
      result.textContent = `Selec a unit`
   }
}