// var name="abhi"


// for(let i = 1; i <= 10; i++){
//     console.log(`${name} ${i}`)
// }

// const fun1 =() =>{
//     return "Abhishek";
// }

// console.log(fun1())


// const name="abhi";

// const fun1 =() =>{
//     return {"name":"Abhishek"};
// }

// console.log(fun1())


// function fun1(){
//     console.log("Function One")
// }
// fun1()



// console.log(fun1())
// function fun1(){
//     console.log("Function One")
//     return 2;
// }
// console.log(fun1())


// const arrowFun =() =>{
//     console.log("arrow function")
// }

// arrowFun()


// arrowFun()
// const arrowFun =() =>{
//     console.log("arrow function")
// }

 

function counter(){
    let count = 0

    return function (fn){
        return ++count + fn()
    }
}

function one(){
    return 56;
}

const increment = counter()
console.log(increment(one))