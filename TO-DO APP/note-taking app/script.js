let data = JSON.parse(localStorage.getItem('notes')) || []
console.log(data)
function displayNotes(){
    document.querySelector('.allnotes').innerHTML='';
    data.map((singleNote) =>{
        if(singleNote){
            addNote(singleNote);
        }
      
    })
}
displayNotes();
function addNote(note= ''){
    let divele = document.createElement('div');
    divele.setAttribute('class', 'singleNote');
    let date= new Date().toLocaleString();
    divele.innerHTML = `
  <div>
      <button class="editBtn">
      <span class='save ${note ? 'hidden':''}'>SAVE</span>
      <span class='edit ${note ?'' :  'hidden'}   '>EDIT</span>
      </button>
      <button class="removeBtn">REMOVE</button>
  </div>
  <div>     
      <div class="note ${note ?'' :  'hidden'}" id="show"></div>
      <textarea name="" class="note  ${note ? 'hidden':''}" id="txtA"></textarea>
  </div>
  <div class="date">${date}</div>
  `
  let text = divele.querySelector("#txtA");
  let show = divele.querySelector("#show");
  let removeBtn = divele.querySelector(".removeBtn");
  let editBtn=divele.querySelector('.editBtn')
  let edit=divele.querySelector('.edit')
  let save=divele.querySelector('.save')
  show.innerHTML=marked(note);
  text.innerHTML=note;

  editBtn.addEventListener('click',()=>{
      show.innerHTML = marked(text.value);
      text.classList.toggle("hidden");
      show.classList.toggle("hidden");
      save.classList.toggle('hidden');
      edit.classList.toggle('hidden');
  })
  removeBtn.addEventListener('click',(e)=>{
      divele.remove();
      updateStorage();
    //   displayNotes();
      // e.target.parentNode.parentNode.remove();
      // divele.style.display="none";
  })
  text.addEventListener('input',(e)=>{
    updateStorage()
  })

  document.querySelector('.allnotes').append(divele)

}

function updateStorage(){
    let textarea=document.querySelectorAll('textarea')
    data=[]
    textarea.forEach(e =>{
        if(e){
            data.push(e.value)
        }
        
    })

    localStorage.setItem('notes', JSON.stringify(data))
}

document.getElementById("btn").addEventListener("click", () => {
 addNote();
});
updateStorage();
