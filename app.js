
let editedPlayer=0;
let styleElement=document.getElementById('styling');
let headdropOverlay=document.getElementById('headdrop');


let formElement=document.querySelector('form');


let findError=document.getElementById('configError');

//game logic variables
let gameArea=document.getElementById('active-game');
let gameBoard=document.getElementById('gameboard');
let activePlayer=0;
let turnPlayerElement=document.getElementById('playerchance');
const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
let currentRound=1;
let GameEndElement=document.getElementById('winner');
let gameIsOver=false;


//name changing buttons
let changePlayer1name=document.getElementById('editPlayer1');
let changePlayer2name=document.getElementById('editPlayer2');
let submittheform=document.getElementById('namesubmit');
let confirmName=document.getElementById('finalname');
let startgame=document.getElementById('newgame');
let clearInput=document.getElementById('username');


changePlayer1name.addEventListener('click',userName);
changePlayer2name.addEventListener('click',userName);



submittheform.addEventListener('click',reload);
headdropOverlay.addEventListener('click',reload);




startgame.addEventListener('click',newGameReload);
   gameBoard.addEventListener('click',selectGameField);


const players=[
    {
        name:' ',
        symbol:'X'
    },
    {
        name:' ',
        symbol:'O'
    }
    ];
    

formElement.addEventListener('submit',saveInfo);


