// function hello(text,para){
//     console.log('inside fun')
//     para(text)
// }
// hello('hello',function cd(data){
//     console.log('inside callback', data)
// })


// function fun1(text){
//     var a=5;
//     function fun2(){
//         console.log(a + " " + text)
//     }
//     text="Yo... abhi this side"
//     a=50;  //aapne newest refernce ko hi lega yeah
//     return fun2;
// }
// let abhi=fun1('from abhishek');
// abhi()

// function fun1(text){
//     function fun2(){
//         console.log(text)
//     }
//     return fun2;
// }
// let abhi=fun1('from abhishek');
// abhi()

/** setInterval continiously run krta jayega */

// setInterval(function hello(){
//     console.log('first')
// },5000);

// let bgChange=document.getElementById('bgChange')
// function randcolor(number){
// return Math.floor(Math.random()* (number+1))
// } 
// function changeColor(){
//     const randval=`rgb(${randcolor(255)}  ${randcolor(255)}  ${randcolor(255)} )`;
//     document.body.style.backgroundColor=randval;

// }
// bgChange.addEventListener('click',()=>{
//     setInterval(changeColor,2000);
// })

/**ek bar run ho ke ruk jayega */

// setTimeout(function(){
//     console.log('first')
// },5000)

console.log('first')
setTimeout(function(){
    console.log('second')
},1000)
console.log('third')