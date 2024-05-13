function userName(event){
    editedPlayer=+event.target.dataset.playerid;
    styleElement.style.display='block';
    headdropOverlay.style.display='block';
}

function reload(){
    styleElement.style.display='none';
    headdropOverlay.style.display='none';
    
    formElement.firstElementChild.classList.remove('error');
    findError.textContent='';
    clearInput.value='';
}


function saveInfo(event){
    event.preventDefault();//this helps us to submit the forms within js without sending req to the https
    const formData=new FormData(event.target);//it holds object
    const enteredPlayerName=formData.get('playername').trim();
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        findError.textContent='Please enter a valid name!';
        return; 
    }
    const updatingPlayerNameInGame=document.getElementById('data-'+editedPlayer+'-player');
    updatingPlayerNameInGame.children[1].textContent=enteredPlayerName;
    if(editedPlayer===1){
        players[0].name=enteredPlayerName;
    }else{
        players[1].name=enteredPlayerName;
    }
    reload();
}