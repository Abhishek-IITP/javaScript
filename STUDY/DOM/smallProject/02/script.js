const btn=document.getElementById("btn");
const btn2=document.getElementById("btn1");
// const body= document.getElementById("container")


function random(number){
    return Math.floor(Math.random()*(number+1));
}

btn.addEventListener("click" , () => {
    const randcolor = `rgb(${random(255)} ${random(255)} ${random(255)})`
    document.body.style.backgroundColor = randcolor;
})

btn1.addEventListener("click", ()=>{
    document.body.style.backgroundColor= "white";
})