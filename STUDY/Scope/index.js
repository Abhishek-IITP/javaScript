/*
3 Types of Scope
a. Global Scope
b.Block Scope
c.Function Scope
*/

// {
//     let name="Abhi"
//     console.log(name)
// }

// optput= Abhi

// {
//     let name="Abhi"
    
// }
// console.log(name)

// error name is not define...

// {
//     var name="Abhi"
    
// }
// console.log(name)
// output=Abhi

/** which mean in Block Scope you have to decleare it within the {} where it was defined or declared...
 * only applicable for let and const
 * in case var you can access it from outside of {}. 
 * make sure to initialize the variable first before calling.
 */


// let name="Abhi"
// {

//     console.log(name)
// }

/**now it is working bcz name is in global scope so its value defined all over the code.  */



// example:

// function hello1(){
//     const instaId = "mr_abhi_930"
//     console.log("Hello Bhaiyo")


//     function hello2(){
//         const name="Abhi"
//         console.log(instaId)
//         {
//             console.log(name)
//         }
//     }
//     hello2()
    
// }

// hello1()