// function makeSizer(size) {
//   return function() {
//       const container = document.querySelector(".container"); // Select the container element
//       container.style.fontSize = size + 'px';
//   };
// }

// var size12 = makeSizer(12);
// var size14 = makeSizer(14);
// var size16 = makeSizer(16);

// // Ensure the DOM is fully loaded before running the code
// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('size-12').onclick = size12;
//   document.getElementById('size-14').onclick = size14;
//   document.getElementById('size-16').onclick = size16;
// });


const container=document.querySelector(".container");
// abhi=document.getElementById('abhi')
// let x= '';
// abhi.addEventListener('click',()=>{
//   console.log(abhi.innerText)
//   x=abhi.innerText; 
//   container.style.fontSize = x + 'px';
  
// })


// let x=prompt("enter the size")
// container.style.fontSize = x + 'px';

const buttons = document.querySelectorAll(".abhi");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const fontSize = button.innerText;
    container.style.fontSize = fontSize + "px";
    console.log(`Font size set to ${fontSize}px`);
  });
});