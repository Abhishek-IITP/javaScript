const paper1=document.querySelector('.paper1');
const paper2=document.querySelector('.paper2')
const items=document.querySelectorAll('.item1');


items.forEach((item)=>{
    item.addEventListener('dragstart',(e)=>{
        let drop=e.target;
        paper2.addEventListener('dragover',(e)=>{
            e.preventDefault();
            e.stopPropagation();
        })
        paper2.addEventListener('drop',()=>{
            paper2.append(drop)
            drop='';
        })
        paper1.addEventListener('dragover',(e)=>{
            e.preventDefault();
            e.stopPropagation();

        })
        paper1.addEventListener('drop',()=>{
            paper1.append(drop);
            drop='';
        })
    })
})


// const paper1= document.querySelector('.paper1');
// const paper2= document.querySelector('.paper2');
// const item1= document.getElementsByClassName('item1');
// const body=document.getElementById('conatiner')


// for(let items of item1){
//     items.addEventListener('dragstart',(e)=>{
//         let data =e.target
//         paper2.addEventListener('dragover',(e)=>{
//             e.preventDefault();
//             e.stopPropagation();

//         })

//         paper2.addEventListener('drop',()=>{
//             paper2.append(data);
//             data=''
//         })


//         paper1.addEventListener('dragover',(e)=>{
//             e.preventDefault();
//             e.stopPropagation();

//         })

//         paper1.addEventListener('drop',()=>{
//             paper1.append(data);
//             data=''
//         })
//     })
// }