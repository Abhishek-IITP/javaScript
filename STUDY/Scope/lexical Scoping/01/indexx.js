// var name="ABhishek";
// function fun1(){
//     var name="Abhi";
//     console.log(name)
// }
// fun1();

/**output="Abhi" */


// function fun1(){
//     console.log(name);
//     var name ="Abhishek";
//     console.log(name);
// }
// fun1()



// var naam ="Sleeping";
// function fun1(){
//     console.log(naam);
    // hello ="Abhishek";  /** concept of auto global */
//     console.log(hello)
// }
// fun1();
// console.log(naam)

// var naam ="Sleeping";
// function fun1(){
//     console.log(naam);
//     hello ="Abhishek";
    
// }
// console.log(hello) /**auto global banane ka chance hi ni mila */
// fun1();
// console.log(naam)

var naam ="Sleeping";
function fun2()

{
    console.log(naam)
    function fun1(){
    console.log(naam);
    hello ="Abhishek";
    
}

fun1();
console.log(hello);
console.log(naam)

}
fun2();

console.log(hello);
console.log(naam)
