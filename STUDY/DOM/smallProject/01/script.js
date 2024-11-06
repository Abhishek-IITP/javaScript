// const btn = document.getElementById('btn')
// const body = document.getElementById('container')

const submit= document.getElementById('submit');
const colorName= document.getElementById('colorname');

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(colorName.value)
    document.body.style.backgroundColor=`${colorName.value}`;
})