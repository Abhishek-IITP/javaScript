// promises :- completion or failure of an asynchronous operation.
// type of promises= object
/** state and value two type(result or value) of promises 
 * state:-
 * a) pending //initial state
 * b)fulfilled also knows a complete , resolve
 * c) rejected //both b and c are from final state
 */

// creataion of promise is a synchronous operation



// const promise1= new Promise(function fun1(resolve,reject){
//     reject("hello")
    
// });
// console.log(promise1)
//  * promise-> final state -> settled{yeah toh fulfilled ya phir reject}
//  * value:-return value



// const promise1= new Promise(function fun1(resolve,reject){ 
// });
// console.log(promise1)
/**
 * value:-
 * promise->pending -> initial state
 * value:- Undefined
 */


// const promise1= new Promise(function fun1(resolve,reject){
//     // resolve("hello");
//     reject("rejected");
    
// });
// promise1.then(function success(result){
//     console.log(result)
// }, function reject(err){
//     console.log(err)
// })


// function isData(item){
//     const promise1= new Promise(function fun1(resolve,reject){
//        setTimeout(function timer1(){
//         if (item){
//             resolve('promise is resolve');
//         }
//         else{
//             reject('promise is rejected')
//         }
        
//        },4000)
//     });
    
//     return promise1;

// }
// let result= isData('hii');
// console.log(result)

// result.then(function success(result){
//     console.log(result)
// })


// let p= new Promise(function(res,rej){
//     res('promise resolved')
// })
// p.then((data)=>{
//     console.log(data)
// })
