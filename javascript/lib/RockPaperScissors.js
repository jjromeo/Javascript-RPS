function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

 //  function samePick() {
	//   if(this.player1.pick === this.player2.pick)
	//   	return true
	// }

}

Game.prototype.PAIRS = {
rock: 		{beats: ["lizard", "scissors"]},
paper: 		{beats: ["rock"]},
scissors: 	{beats: ["paper"]}
};

Game.prototype._isSamePick = function() {
	    return this.player1.pick === this.player2.pick;
};


Game.prototype.winner = function() {
	if(this._isSamePick()) return null;
    if(this.PAIRS[this.player1.pick].beats.indexOf(this.player2.pick) > -1){
    	return this.player1;
    }
    else {
    	return this.player2;
    }
};








