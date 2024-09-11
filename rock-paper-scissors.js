window.document.querySelector("body").addEventListener("keydown" , ()=> {
  if(event.key === "p") calculating("paper");
  else if(event.key==="r") calculating("rock");
  else if(event.key === "s") calculating("scissors");
}
);

//Storing JSON object in a variable after reseting the page
let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  ties:0
};

let calculating =  player => {
  let  pc= Math.floor(Math.random()*(10/4));
  pc=translating(pc);
  
  if(player === pc){
    let winner='tie';
    let winner1='tie';
    score.ties +=1;
    resultMessage(player,pc,winner,winner1);
  }
  else if(player==='rock' && pc==='paper'){
    let winner='pc';
    let winner1='pc';
    score.losses +=1;
    resultMessage(player,pc,winner,winner1);
  }
  else if(player==='rock' && pc ==='scissors'){
    let winner='player';
    let winner1='player';
    score.wins +=1;
    resultMessage(player,pc,winner,winner1);
  }
  else if(player==='paper' && pc ==='rock'){
    let winner='player';
    let winner1='player';
    score.wins +=1;
    resultMessage(player,pc,winner,winner1);
  }
  else if(player==='paper' && pc ==='scissors'){
    let winner='pc';
    let winner1='pc';
    score.losses +=1;
    resultMessage(player,pc,winner,winner1);
  }
  else if(player==='scissors' && pc ==='rock'){
    let winner='pc';
    let winner1='pc';
    score.losses +=1;
    resultMessage(player,pc,winner,winner1);
  }
  else if(player==='scissors' && pc ==='paper'){
    let winner='player';
    let winner1='player';
    score.wins +=1;
    resultMessage(player,pc,winner,winner1);
  }
  //Object to JSON to Local Storage
  console.log(`Object to JSON to Local Storage`)
  localStorage.setItem('score',JSON.stringify(score));
}


let resultMessage =  (player,pc,winner,winner1) => {
  console.log(`resultMessage Function`);
  if(winner==='tie'){winner=pc;}
  else if(winner==='player'){winner=player;}
  else if(winner==='pc'){winner=pc;}
  document.querySelector('.paragraph').innerHTML=`Player: <img src="Images/${player}-emoji.png" class="movesImages"> PC: <img src="Images/${pc}-emoji.png" class="movesImages" > Winner: <img src="Images/${winner}-emoji.png" class="movesImages">`;
  document.querySelector('.second-paragraph').innerHTML=`${winnerAnnouncment(winner1)}`;
  document.querySelector('.third-paragraph').innerHTML=`Wins: ${score.wins},&nbspLosses: ${score.losses},&nbspTies:${score.ties}`;
  };
  

let translating =  pc => {
  if(pc===0){
    pc='rock';
    return pc;
  }
  if(pc===1){
    pc='paper';
    return pc;
  }
  if(pc===2){
    pc='scissors';
    return pc;
  }
}


let winnerAnnouncment =  winner1 => {
  if (winner1==='pc'){
    return 'The winner is PC';
  }
  else if(winner1==='player'){
    return 'The winner is Player';
  }
  else if(winner1==='tie'){
    return 'It is a tie';
  }
}


let resetScore =  () => {

  alert(`Wins:  0
Losses:  0
Ties:  0`);
  score.losses=0;
  score.wins=0;
  score.ties=0;
  //Removing the saved object 'score' from local storage
  console.log('Removing the saved object \'score\' from local storage');        localStorage.removeItem('score');
}

let isAutoPlay = false;
let id;
let player;
console.log(`isAutoPlay outside the function ${isAutoPlay}`);
let autoPlay =  () => {
  if(!isAutoPlay){
    id=setInterval( () => {
    player = translating(Math.floor(Math.random() * (10 / 4)));
    calculating(player);
    isAutoPlay = true;

    }, 1000 );
  }else{
    clearInterval(id);
    isAutoPlay=false;
  }
}

window.document.querySelector(".rockButton").addEventListener('click' , ()=>{
  calculating('rock');
}  );

window.document.querySelector(".paperButton").addEventListener('click' , () =>{
  calculating('paper');
  
});

window.document.querySelector(".scissorsButton").addEventListener('click' , () =>{
  calculating('scissors');
})


