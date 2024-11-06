const wrapper = document.querySelector('.wrapper');
const boxes = document.querySelectorAll('.boxes');
let currentPlayer = 'X';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]  
];


boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (e.target.textContent === "") {
            e.target.textContent = currentPlayer;
            winner();
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    });
});


function winner(){
    winningCombinations.forEach((item)=>{
        let index0=item[0]
        let index1=item[1]
        let index2=item[2]
        console.log(index0 , index1 , index2)

    })
}


// const wrapper=document.querySelector('.wrapper')
// const box= document.querySelectorAll('.boxes');

// wrapper.addEventListener('click',(e)=>{
//     e.target.textContent='hello';
// })