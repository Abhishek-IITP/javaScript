// let obj = {
//     username : "abhi",
//     email : "abhi@gmail.com",
//     printName(){
//         console.log(this.username)
//     },

const { pid } = require("process");

    
    // printEmail : function(){
            
    // },
    
    // printName2: () => {
            
    // }
// }
// obj.printName() ;


function Products(name,price){
    this.name=name;
    this.price=price;
    this.productName= function(){
        console.log(this.name)
    }
}
let prod1= new Products("samsung S24 ultra" , 120000);
let prod2= new Products('iPhone 16 pro max', 150000);
console.log(prod1.productName())
// console.log(prod2)

/** 'NEW' KEYWORDS 4 STEPS
 * NEW EMPTY OBJECTS GET CREATED
 * OBJECT GET LINKED TO PROTOTYPE OF THE CONSSTRUCTOR FUNCTION 
 * OBJECT GET BOUNDS AS 'THIS'
 * RETURN OBJECT
  */

// class Products{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
// }

// let p1= new Products('nokia 3310' ,3000)
// console.log(p1)