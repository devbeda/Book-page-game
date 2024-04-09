const username = document.getElementById("username");
const updtname = document.getElementById("userNameSection");


document.getElementById("play").addEventListener("click", () => {
  document.querySelector(".username-container").style.display = "flex";
  document.querySelector(".welcome-page").style.opacity = 0.4;
  document.querySelector(".topbar").style.opacity = 0.4;
});

function getname(username) {
  updtname.innerText = username.value;
}

document.getElementById("enter").addEventListener("click", () => {
  getname(username);
  document.querySelector(".username-container").style.display = "none";
  document.querySelector(".welcome-page").style.display = "none";
  document.querySelector(".game-dashboard").style.display = "flex";
  document.querySelector(".welcome-page").style.opacity = 1;
  document.querySelector(".topbar").style.opacity = 1;
});
function getrandno() {
  const pagenumber = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      pagenumber.push(i);
    }
  }

  const randomNumber = Math.floor(Math.random() * 50) + 1;
  return pagenumber[randomNumber];
}

const usrscore = document.getElementById("#userscore");
var usercurrnum = 0;

const usrbutn = document.querySelector("#userscore");
document.getElementById("userturn").addEventListener("click", function playing()  {
  const randomnumber = getrandno();
  let lastdigit = randomnumber % 10;
  document.querySelector("#userscore").innerText = usercurrnum;


  if (lastdigit != 0) {
    document.querySelector("#pageno").innerText = randomnumber;
    usercurrnum = usercurrnum + lastdigit;

  } else if (lastdigit === 0) {
    document.querySelector("#pageno").innerText = "out";
    document.getElementById("userturn").style.display = "none";
    bsf();
  }
});
var compcurrnum = 0;
function bsf() {
  setTimeout(function compturn() {
    let num = getrandno();
    document.querySelector("#pageno").innerText = num;
    let lastdigit = num % 10;
    
    if (lastdigit != 0) {
      compcurrnum += lastdigit;
      document.querySelector("#compscore").innerText = compcurrnum;
    }
    if (usercurrnum < compcurrnum) {
      
      document.getElementById("winner-popup").style.display = "inline";
      document.querySelector(".welcome-page").style.opacity = 0.5;
      document.querySelector(".topbar").style.opacity = 0.5;
      document.querySelector("#winner").innerText = "Computer win";
      return;
    } 
   
    else if (lastdigit === 0) {
      
      document.querySelector("#pageno").innerText = "out";
      document.getElementById("winner-popup").style.display = "inline";
      document.querySelector(".game-dashboard").style.opacity = 0.5;
      document.querySelector(".topbar").style.opacity = 0.5;
      
      if(usercurrnum > compcurrnum){
        document.getElementById("winner-popup").style.display = "inline";
        document.querySelector(".game-dashboard").style.opacity = 0.5;
        document.querySelector(".topbar").style.opacity = 0.5;
        document.querySelector("#winner").innerText = "You Win";
        return;
      }  else if(usercurrnum === compcurrnum){
        document.getElementById("winner-popup").style.display = "inline";
        document.querySelector(".game-dashboard").style.opacity = 0.5;
        document.querySelector(".topbar").style.opacity = 0.5;
        document.querySelector("#winner").innerText = "Match draw";
        console.log("match draw");
        return;
      }
      return;
    }


    setTimeout(compturn, 1500);
  }, 1500);
}
document.getElementById("replay").addEventListener("click", () =>{
    usercurrnum=0;
    compcurrnum=0;
    document.querySelector(".game-dashboard").style.opacity = 1;
      document.querySelector(".topbar").style.opacity = 1;
    document.getElementById("winner-popup").style.display = "none";


    document.querySelector("#userscore").innerText = "0";
    document.querySelector("#pageno").innerText = "0";
    document.getElementById("userturn").style.display = "inline";
    document.querySelector("#compscore").innerText = "0";



});

