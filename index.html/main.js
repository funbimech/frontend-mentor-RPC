 const choices = ["rock", "paper", "scissors"];
let playerscore = 0;
let compscore = document.querySelector(".compscore")
 let win = 0;
const container = document.querySelector(".container");
 const playerchoice = document.querySelector(".playerchoice");
 const computerchoice = document.querySelector(".computerchoice");
const buttonchoices = document.querySelectorAll(".buttonchoices");
 const result = document.getElementById("result");
 const btnchoice = document.querySelectorAll(".btnchoice");
 const playscore = document.querySelector(".playscore");
 const cmpscore = document.querySelector(".cmpscore");
 const score =document.querySelectorAll(".score")
let compwin = 0;

 const playround = (playerchoice, computerchoice) => {
  if (playerchoice === computerchoice) {
    return 'tie'
  } else if (
   (playerchoice === "rock" && computerchoice === "scissors") ||
    (playerchoice === "paper" && computerchoice === "rock") ||
    (playerchoice === "scissors" && computerchoice === "paper") 
 )  
    {
 win.textContent= "you won" + playerchoice
    win++
   playscore.textContent = win;
    } else {
       compwin.textContent = "you lost" + computerchoice
       compwin++
    }
updatescore()
  
};

function computerplay() {
   let choice = choices[Math.floor(Math.random() * 3)];
   return choice;
 }

btnchoice.forEach((button) => {
  button.addEventListener("click", () => {
    const playerchoice = button.getAttribute("id");
    const computerchoice = computerplay();
     playround(playerchoice, computerchoice);
  
  });

 }

);
 function updatescore() {
 const updatewin =compwin- win
 playscore.textContent= updatewin;
}

