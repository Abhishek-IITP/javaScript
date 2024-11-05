const btn = document.getElementById('btn')
const body = document.getElementById('container')

const submit= document.getElementById('submit');
const colorName= document.getElementById('colorname');

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    body.style.backgroundColor=`${colorName.value}`;
    
})