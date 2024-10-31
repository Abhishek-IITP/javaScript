// function init(){
//     var name= "abhi"; //name is a local variable created by init
//     function displayName(){ //displayName is the inner function , that forms the closure 
//         console.log(name) //use variable declared in the parent function
//     }
//     displayName();
// }
// init();


// function makeFun(){
//     const name="Abhi";
//     function displayName(){
//         console.log(name)
//     }
//     return displayName;
// }

// const myFun= makeFun();

// myFun();  output:- Abhi


// EXPLANATION:- 

// function makeFun(){
//     const name="Abhi";
//     function displayName(){
//         console.log(name)
//     }
//     return displayName;
// }

// const myFun= makeFun();

// /**
//  * myFun() -> 
//  * function displayName(){
//         console.log(name)   //aur name global me present h upper toh isiliye Abhi print hoga
//     }
//  */

// myFun();