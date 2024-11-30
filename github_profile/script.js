let user = document.getElementById("profile");
let btn = document.getElementById("btn");

async function fetchUser(userId) {
  let response = await fetch(`https://api.github.com/users/${userId}`);
  let result = await response.json();
  console.log(result);
  displayUser(result);
}

btn.addEventListener("click", () => {
  let abhi = user.value;
  console.log(abhi);
  fetchUser(abhi);
});

function displayUser(result) {
  const {
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url,
  } = result;

  if (avatar_url){
    document.getElementById("card").innerHTML = `      
    <img src=${avatar_url} alt="">
    <h2>${name}</h2>
    <h3>${bio}</h3>
    <div id="data">
        <p>Followers 
            <span>${followers}</span>
        </p>
            
        <p>Following <span>${following}</span></p>
            
        <p>repo <span>${public_repos}</span></p>
            

        </div>
        <a href=${html_url} target="_blank" id="btn2">View Profile</a>
        `

  }
  else{
    document.getElementById("card").innerHTML =`<p class="error-message">User not available</p>`
  }
;
}
