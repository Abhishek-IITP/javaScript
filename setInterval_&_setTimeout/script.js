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

// console.log('first')
// setTimeout(function(){
//     console.log('second')
// },1000)
// console.log('third')

// console.log('first')
// console.log('second')
// for(let i=0; i<10000000000; i++){

// } /**es case me output :- first second aur kaafi der ke baad third aayega jb tk loop pura run ni kr jta */

// function abhi(){
//     for(let i=0; i<10000000000; i++){

//     }
// } /**es case me output:- first second third aur bich ka loop background me chalta rahega */ //type async function
// console.log('third')

// console.log('first')
// console.log('second')
// for(let i=0; i<10000000000; i++){

// }
// console.log('third') /**script tag ko h1 ke upper rakho aur jaadu dekho */


// function fun1(){
//     for (let i=0; i<5;i++){ //replace let with var see the difference
//         setTimeout(() => {
//             console.log(i)
//         }, i*1000);
//     }
// }
// fun1(); 

console.log('starting')
setTimeout(() => {
    console.log('1')
    
}, 5000);
setTimeout(() => {
    console.log('2')
    
}, 3000);
setTimeout(() => {
    console.log('3')
    
}, );

console.log('ending')
