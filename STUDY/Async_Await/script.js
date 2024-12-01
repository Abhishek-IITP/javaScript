// async function fun1(){
//     console.log('first')
//     return "hello"
// }
// let x= fun1()
// console.log(x)

const { type } = require("os");


// function fun2(){
    // return Promise.resolve('hello')
    // return new Promise(function(res,rej){
    //     res('abhi')
    // })

// }
// let y =fun2();
// console.log(y)

// async function fun1(){
//     return "kumar"
// }
// fun1().then((data)=>{
//     console.log(data)
// })

// function pro(){
//     return new Promise(function pro1(res,rej){
//         res('ABhishek')
//     })
// }

// async function fun1() {
//     let x = await pro()
//     console.log(x)
//     /**fun1() kuch return krega tb na .then wale portion me kuch output aayega */
//     return "abhiiiiiii"
// }

// fun1().then((data)=>{
//     console.log('abhi',data)
// })

function searchFood(item){
    return new Promise(function fun1(res,rej){
            console.log('Searching start for', item , '.........')
            setTimeout(function timer1(){
                let Type = `list of ${item}`
                res({item,Type});
                
            },3000);
        
    })
}
function orderFood(item){
    return new Promise(function fun2(res,rej){
        console.log('select' , item);
    setTimeout(function timer2() {
            let id=Math.floor(Math.random()*9999999);
            res({item,id});
    }, 4000);

    });
    
}

function payments(item,id){
    return new Promise(function fun3(res,rej){
        console.log(`payment for ${item} with id no :- ${id}`);
            
    setTimeout(function timer3(){
        let status = true;
        console.log("Payment successfull with status",status)
        res(status);
    }, 5000);
    })

}

async function foodOrder(item){
    let res1 = await searchFood(item);
    console.log(`list of ${item}`)
    let res2= await orderFood(res1.item);
    console.log("order created successfully with id no ",res2.id);
    let res3= await payments(res2.item, res2.id)
}
foodOrder("Biryani")






// let result =searchFood("pizza").then(function consumer1(item){
//     console.log(item.data);
//     return orderFood(item.item)
// })
// .then(function consumer2(id){
//     console.log("order created successfully with id no ",id.id);
//     return payments(id.item,id.id)
// })
// .then(function consumer3(status){
//     console.log(status)
// })


