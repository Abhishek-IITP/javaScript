const ACCESS_TOKEN='F2K7DLe09ecbRHn8gXNVs6zgUtrxcZhjWHzVooK5Cuc'
let input = document.getElementById("profile");
let btn = document.getElementById("btn");
let history;
let page=1;
let main=document.getElementById('main');

btn.addEventListener("click", () => {
    page=1;
main.innerHTML=''
  history=input.value;
  
  fetchImg(history)
//   console.log(history)
});

async function fetchImg(history) {
    let response =await fetch(`https://api.unsplash.com/search/photos?query=${history}&client_id=${ACCESS_TOKEN}&page=${page}`);
    let result= await response.json();
    if(result.results.length < 1){
        main.innerHTML= `<h2> NOT FOUND </h2>`

    }
    else{
        displayImg(result)
    }
    displayImg(result)
    
}
function displayImg(res){
    res.results.map((data) => {
        let div=document.createElement('div');
        div.setAttribute('id',"card");
        div.innerHTML=`
            <a class='link' href='${data.links.html}' target>
            <div id="info">
                <img src=${data.user.profile_image.large} alt="">
                <h3>${data.user.username}</h3>
            </div>
            <div id="detail">
                <img src=${data.urls.regular} alt="">
                <p>${data.alt_description}</p>  
            </div></a>
        `
        document.getElementById('main').appendChild(div);
      });
      document.getElementById('btn1').classList.add('visible')
      document.getElementById('btn2').classList.add('visible1')
      document.getElementById('btn2').addEventListener('click',()=>{
        input.value=''
        main.innerHTML=''
        document.getElementById('btn1').style.display="none";
        document.getElementById('btn2').style.display="none";

    })
}

document.getElementById('btn1').addEventListener('click',()=>{
    page++;
    fetchImg(history)
})

