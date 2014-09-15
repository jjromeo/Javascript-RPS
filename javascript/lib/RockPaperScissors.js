var loser;

function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

}

Game.prototype.PAIRS = {
rock: 		{beats: ["lizard", "scissors"]},
paper: 		{beats: ["rock", "Spock"]},
scissors: 	{beats: ["paper", "lizard"]},
lizard: 	{beats: ["Spock", "paper"]},
Spock: 		{beats: ["scissors", "rock"]}
};

Game.prototype._isSamePick = function() {
	    return this.player1.pick === this.player2.pick;
};


Game.prototype.winner = function() {
	if(this._isSamePick()) return null;
    if(this.PAIRS[this.player1.pick].beats.indexOf(this.player2.pick) > -1){
    	this.loser = this.player2
    	return this.player1;
    }
    else {
    	this.loser = this.player1
    	return this.player2;
    }
};

Game.prototype.displayResult = function() {
	return this.winner().name + "beats" + this.loser.name;
};









