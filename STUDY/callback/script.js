// function one(){
//     console.log("hello")
// }

// function two(){
//     console.log("hello two")
// }

// one(two)


// function one(fn){   /**parameter */
//     console.log("hello")
//     fn()
// }

// function two(){
//     console.log("hello two")
// }

// one(two)  /*argument*/



// function one(para,fn){   /**parameter */
//     console.log(fn)
//     console.log(para)
//     fn()
// }

// function two(){
//     console.log("hello two")
// }

// one(45, ()=>{
//     console.log("anonymous Function")
// })  /*argument*/



// function add(a,b){
//     console.log(a + b);
// }
// function sub(a,b){
//     console.log(a - b)
// }
// function calculateArith(num1 , num2 , fn){
//     return fn(num1,num2)
// }
// calculateArith(4,5,add)


/** in case of return we have to store our output but in clg we don't...
 */
// function add(a,b){
//     return(a + b);
// }
// function sub(a,b){
//     return (a - b)
// }
// function calculateArith(num1 , num2 , fn){
//     const output= fn(num1,num2);
//     console.log(output)
// }
// calculateArith(4,5,add)


/**aagar hume output ko return krna h toh phir hume calculateAArith ko ek dusre variable ke andar store krna padega */
function add(a,b){
    return(a + b);
}
function sub(a,b){
    return (a - b)
}
function calculateArith(num1 , num2 , fn){
    const output= fn(num1,num2);
    return output;
}
const finalOutput = calculateArith(4,9,add);
console.log(finalOutput)