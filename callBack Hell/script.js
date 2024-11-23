function searchFood(item ,cb){
    console.log('Searching start for', item , '.........')
    setTimeout(function timer1(){
        let data = `list of ${item}`
        cb(item,data);
        
    },3000);
}
function orderFood(item, cb2){
    console.log('select' , item);
    setTimeout(function timer2() {
            let id=Math.floor(Math.random()*9999999);
            
            cb2(id);
    }, 5000);
}
function payments(item,id , cb3){
    console.log(`payment for ${item} with id no :- ${id}`);
    setTimeout(function timer3(){
        let status = true;
        cb3(status);
    }, 6000);
}

let abhi=searchFood('burger' ,function fun1( item,data){
    console.log(data)
    orderFood(item,function fun2(orderId){
        console.log('order created successfully with id no :-',orderId);
        payments(item,orderId,function fun3(response){
            console.log('payment successfull with status', response)
        })
    })
})


// function searchFood(item){
//     return new Promise(function fun1(res,rej){
//         console.log('searching start for',item,'......')
//         setTimeout(function timer1(){
//             let data=`list of ${item}`;
//             res({item,data}); 
//         },3000);
//     })
// }
// function orderFood(item){
//     return new Promise(function fun2(res,rej){
//         console.log('select', item);
//         setTimeout(function timer2() {
//             let id = Math.floor(Math.random()*99999999);
//             res(id);
            
//         }, 4000);
//     })
// }
// function payments(item,id){
//     return new Promise(function fun3(res,rej){
//         console.log(`payment for ${item} with id no :- ${id}`);
        
//         setTimeout(() => {
//             let status =true;
//             res(status)
//         }, 5000);
//     })

// }

// let result =searchFood("pizza").then(function consumer1(item){
//     console.log(item.data);
//     orderFood(item.item).then(function consumer2(id){
//         console.log('your order id is :-',id);
//         payments(item.item,id).then(function consumer3(status){
//             console.log(status);
//         })
//     });

// });