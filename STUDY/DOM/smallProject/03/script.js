const submit=document.getElementById("submit");
const colorname=document.getElementById('colorname');

colorname.addEventListener("input", (e)=>{
    e.preventDefault();
    console.log(colorname.value)
    const p = document.createElement("p");
    p.innerHTML=colorname.value
    document.body.appendChild(p)
    // document.getElementById("ptag").innerText=colorname.value;


})