let bgColor= document.getElementById('bgColor');
function randcolor(number){
    return Math.floor(Math.random()*(number+1))
}

function bgChange(){
    let randval = `rgb(${randcolor(255)} ${randcolor(255)} ${randcolor(255)})`
    document.body.style.backgroundColor=randval
}
bgColor.addEventListener('click',()=> {
    setInterval(bgChange,1000)
})