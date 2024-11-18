function searchFood(item){
    return new Promise(function fun1(res,rej){
            console.log('Searching start for', item , '.........')
            setTimeout(function timer1(){
                let data = `list of ${item}`
                res(data)
                
            },3000);
        
    })
}
function orderFood(item){
    return new Promise(function fun2(res,rej){
        console.log('select' , item);
    setTimeout(function timer2() {
            let id=Math.floor(Math.random()*9999999);
            res(`your order id is :- ${id}`);
    }, 5000);

    })
    
}

let order=orderFood("pizza").then(function consumer1(item2){
    console.log(item2)
})


let result =searchFood("pizza").then(function consumer1(item){
    console.log(item)
})
// let payment1= payment('Pizza').then(function(item3){
//     console.log(item3)
// })
