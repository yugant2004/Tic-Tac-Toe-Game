




function resetGame(){
  activePlayer=0;
   currentRound=1;
   gameIsOver=false;
   GameEndElement.firstElementChild.innerHTML='You Won,<span id="winnername">Player Name</span>!';
   GameEndElement.style.display='none';
    
   let gameBoardIndex=0;
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
          gameData[i][j]=0;
          const gameBoardItemElement=gameBoard.children[gameBoardIndex];
         gameBoardItemElement.textContent='';
          gameBoardItemElement.classList.remove('disabled');
         gameBoardIndex++;
       }
    }
}


function newGameReload(){
    if(players[0].name ===' ' || players[1].name ===' '){
        alert('please enter name of the players');
        return;
    }

    resetGame();

turnPlayerElement.textContent=players[activePlayer].name;
gameArea.style.display='block';

}





function switchPlayers(){
   if(activePlayer===0){
       activePlayer=1;
   }
    else{
     activePlayer=0;
    }
    turnPlayerElement.textContent=players[activePlayer].name;
}

function selectGameField(event){
    if(event.target.tagName!=='LI'|| gameIsOver){
       return;
    }
    const selectedCol=event.target.dataset.col- 1;
   const selectedRow=event.target.dataset.row- 1;

    if(gameData[selectedRow][selectedCol]>0){
      alert('please select an empty field');
      return;
    }
   
   event.target.textContent=players[activePlayer].symbol;
    event.target.classList.add('disabled');
    gameData[selectedRow][selectedCol]=activePlayer+1;

   const winnerId=winner();
    if(winnerId!==0){
       endGame(winnerId);
    }
    currentRound++;
    switchPlayers();   
}




function winner(){
   for(let i=0;i<3;i++){
   if( gameData[i][0]>0 && gameData[i][0]===gameData[i][1] && gameData[i][1]===gameData[i][2]){
        return gameData[i][0];
    }
}
   for(let i=0;i<3;i++){
    if( gameData[0][i]>0 && gameData[0][i]===gameData[1][i] && gameData[0][i]===gameData[2][i]){
        return gameData[0][i];
    }
}

if(gameData[0][0]>0 && gameData[0][0]===gameData[1][1]&& gameData[1][1]===gameData[2][2]){
   return gameData[0][0];
}
if(gameData[2][0]>0 && gameData[2][0]===gameData[1][1]&& gameData[1][1]===gameData[0][2]){
   return gameData[2][0];
}
if(currentRound===9){
   return -1;
}
return 0;
}


function endGame(winnerId){
    gameIsOver=true;
GameEndElement.style.display='block';
if(winnerId>0){
  const winnerName=players[winnerId-1].name;
GameEndElement.firstElementChild.firstElementChild.textContent= winnerName;
}
else{
   GameEndElement.firstElementChild.textContent='it\'s a draw!';
}
}



    




