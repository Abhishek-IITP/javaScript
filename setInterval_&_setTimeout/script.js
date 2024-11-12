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
//         console.log(a)
//     }
//     a=50;  //aapne newest refernce ko hi lega yeah
//     return fun2;
// }
// let abhi=fun1('from abhishek');
// abhi()

function fun1(text){
    function fun2(){
        console.log(text)
    }
    return fun2;
}
let abhi=fun1('from abhishek');
abhi()