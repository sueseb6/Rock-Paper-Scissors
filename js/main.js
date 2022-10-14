// Worked with Makoso in community 

var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsRock(){
	let botsWeapon =getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	let botsWeapon =getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	let botsWeapon =getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");

}
function getRandomWeapon(){
	let randomNumber=Math.floor (Math.random()*9);
	let plays=[rock,paper,scissors]
	let botsWeapon="plays"
	if(randomNumber<3){
		 botsWeapon="rock";
	}
	if(randomNumber>3 && randomNumber<6){
		botsWeapon="scissors";
	}
	else if(randomNumber>6){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Congratulation, you won	");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}