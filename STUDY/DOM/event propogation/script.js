const mainDiv=document.getElementById("mainDiv");
const box=document.getElementById("div1");
/**bubbling */

// box.addEventListener('click',()=>{
//     console.log('box')
// })
// mainDiv.addEventListener('click',()=>{
//     console.log('main')
// })
// document.body.addEventListener('click',()=>{
//     console.log("body")
// })

/**event capturing */

// box.addEventListener('click',()=>{
//     console.log('box')
// },true)
// mainDiv.addEventListener('click',()=>{
//     console.log('main')
// },true)
// document.body.addEventListener('click',()=>{
//     console.log("body")
// },true)

/**to stop event propogation */

box.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('box')

})
mainDiv.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('main')
})
document.body.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("body")
})