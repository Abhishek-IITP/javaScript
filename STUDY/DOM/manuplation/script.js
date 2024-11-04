const btn = document.getElementById('btn')
const body = document.getElementById('container')
// btn.onclick=()=>{
//     console.log('hello from js file')
// }


// btn.addEventListener("click", ()=>{
    
//     body.style.backgroundColor="pink"
// })

// btn.addEventListener("click", ()=>{
    
//     const ischange =confirm("color change ?")
//     if (ischange==true){
//         body.style.backgroundColor="pink";
//     }

// })

btn.addEventListener("click", ()=>{
    
    const ischange =confirm("which  color ?");
    if (ischange==true){
        const colorName = prompt("which color?");
        body.style.backgroundColor=`${colorName}`;
    }

})