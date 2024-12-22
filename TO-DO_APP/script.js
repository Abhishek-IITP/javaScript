let input = document.getElementById("todoInput");
let btn = document.getElementById("btn");
function removeOne(id,){
    data.splice(id,1);
    let div = document.getElementById(id)
    localStorage.setItem("allTodo", JSON.stringify(data));
    div.remove();
    displayTodo();
}

function lines(id){
    let div=document.getElementById(id);
    div.children[0].classList.toggle('complete');
}

let data= JSON.parse(localStorage.getItem('allTodo')) || []
let id =0;

function displayTodo(){
    document.getElementById('all').innerHTML='';
    data.map((single,id)=>{
        let div=document.createElement('div');
        div.setAttribute('class','singleTodo');
        div.setAttribute('id',id);
        div.innerHTML=`        
        <h2 >${id+1}. ${single}</h2>
        <input type="checkbox" id="check"  onclick=lines(${id}) >
        <button onclick=removeOne(${id})>Remove</button>`
        document.getElementById('all').appendChild(div)
        id++;
        
    })
}

btn.addEventListener("click", () => {
    let inputVal = input.value;
    if (inputVal) {
        data.push(inputVal);
        localStorage.setItem("allTodo", JSON.stringify(data));
        input.value = '';
        displayTodo();
    } else {
        alert("PLEASE ENTER A TASK");
    }
});
displayTodo();

// let input = document.getElementById("todoInput");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     let inputVal=input.value;
//     let div=document.createElement('div');
//     if (inputVal) {   
//         div.setAttribute('class','singleTodo');
//         div.innerHTML=`        
//         <h2 >${inputVal}</h2>
//         <input type="checkbox" id="check">
//         <button>Remove</button>
//         `
    
//         let btnn = div.getElementsByTagName('button');
//         btnn[0].addEventListener('click',(e)=>{
//             e.target.parentNode.remove();
//         })
//         let inputt=div.getElementsByTagName('input');
//         inputt[0].addEventListener('click',(e)=>{
//             e.target.previousElementSibling.classList.toggle('complete');
//         })
//         document.getElementById("all").appendChild(div)
//         input.value ='';
         
//     }   
//     else{
//         alert('please enter a task')
//     }
// });



