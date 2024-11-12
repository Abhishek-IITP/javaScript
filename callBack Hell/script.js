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
function payment(item,id , cb3){
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
        payment(item,orderId,function fun3(response){
            console.log('payment successfull with status', response)
        })
    })
})
