function api1(){
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            res('api1')
        },5000)
    });
}
function api2(){
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            rej('rejected')
        },2000)
    });
}

let api3=new Promise ((res,rej)=>{
        setTimeout(()=>{
            res('api3')
        },7000)
    })


let x= Promise.any([api1() , api2() , api3]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log('error')
})

/**any:- jo promise sabse pahle resolve ho jayega woh hi output me show krega aur aagar koi promises pahle reject ho gya tb bhi woh output me show ni krega....rejected one ke just baad jo resolve hoga woh hi show krega bs (only resolve promises hi output me aayaga....single output) */