// const btn=document.getElementById('gen');
// const newPass=document.getElementById('newPass');
// const slider=document.getElementById('range');
// const rangeVal=document.getElementById('rangeVal')

// const upper =document.getElementById('up')
// const low=document.getElementById('low')
// const number=document.getElementById('num')
// const symbol=document.getElementById('sym')

// rangeVal.innerText=slider.value
// slider.addEventListener('input',(e)=>{

//     rangeVal.innerText=e.target.value
// })

// btn.addEventListener('click',()=>{

//     let capital='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let small='abcdefghijklmnopqrstuvwxyz'
//     let num ='1234567890'
//     let symbolstr='!@#$%^&*_(){}'
//     let finalStr='';
//     let latestPass=''
    
//     if(upper.checked){
//         finalStr+=capital
//     } 
//     if(low.checked){
//         finalStr+=small
//     } 
//     if(number.checked){
//         finalStr+=num
//     } 
//     if(symbol.checked){
//         finalStr+=symbolstr
//     } 
//     if(finalStr==''){
//         alert("please atleast one field")
//         return;
//     }


//     for (let i=0;i<slider.value;i++){
//         let rand=Math.floor ( Math.random()*finalStr.length)
//         latestPass += finalStr[rand]
//         // console.log(rand)
//     }
//     newPass.innerText= `${latestPass}`;

// })

// let num ='1234567890';
// let newnum = '';
// let newber=''

// for(let i=0;i<10;i++){
//     let rand=Math.floor(Math.random()*num.length)
//     newnum +=newber[rand];
//     console.log(newber)
    

// }

// let num = '1234567890';
// let newnum = '';

// for (let i = 0; i < 10; i++) {
//     let rand = Math.floor(Math.random() * num.length);
//     newnum += num[rand]; // Accessing num[rand] instead of newber[rand]
// }

// console.log(newnum);


let num = '0123456789';
let newnum = '';

// Ensure the first digit is 6, 7, 8, or 9
let first= '6789';
newnum += first[Math.floor(Math.random() * first.length)];

// Generate the remaining 9 digits
for (let i = 1; i < 10; i++) {
    let rand = Math.floor(Math.random() * num.length);
    newnum += num[rand];
}

console.log(newnum);
