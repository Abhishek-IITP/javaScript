const btn=document.getElementById("btn");
const btn2=document.getElementById("btn1");
// const body= document.getElementById("container")


function rand(number){
    return Math.floor(Math.random()*(number+1));
}
btn.addEventListener('click',()=>{
    const randomval=`rgb(${rand(255)} ${rand(255)} ${rand(255)})`
    document.body.style.backgroundColor=randomval;
})
btn2.addEventListener('click',()=>{
    document.body.style.backgroundColor="white";
})
