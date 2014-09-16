

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
rock: 		{lizard: "crushes", scissors: "crushes"},
paper: 		{rock: "covers", Spock: "disproves"},
scissors: 	{paper: "cuts", lizard: "decapitates"},
lizard: 	{Spock: "poisons", paper: "eats"},
Spock: 		{scissors: "smashes", rock: "vaporizes"}
};

Game.prototype._isSamePick = function() {
	    return this.player1.pick === this.player2.pick;
};


Game.prototype.winner = function() {
	if(this._isSamePick()) return null;
    if(this.PAIRS[this.player1.pick][this.player2.pick] ){
    	this.loser = this.player2
    	return this.player1;
    }
    else {
    	this.loser = this.player1
    	return this.player2;
    }
};

Game.prototype.displayResult = function() {
	if(this.winner())
		return this.winner().name + "'s " + this.winner().pick + " " + this.PAIRS[this.winner().pick][this.loser.pick] + " " + this.loser.name + "'s " + this.loser.pick;
	else
		return "The game has resulted in a draw."
};








