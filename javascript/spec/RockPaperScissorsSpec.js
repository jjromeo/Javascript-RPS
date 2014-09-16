// http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock

// 2nd extension task - Write a new method (with tests), that returns a string with the winning player's name, the winning player's pick, the losing player's name and pick, joined with an appropriate verb. E.g.




describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Alex');
    player2 = new Player('Bob');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.displayResult()).toContain('crushes');
      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

        it('should lose to Spock', function() {

        player1.picks('rock');
        player2.picks('Spock');
        expect(game.winner()).toBe(player2);

      });



    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat Spock', function(){
        player1.picks('paper');
        player2.picks('Spock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to lizard', function(){

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function(){

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to Spock', function(){

        player1.picks('scissors');
        player2.picks('Spock');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('lizard', function(){

      it('should beat Spock', function(){

        player1.picks('lizard');
        player2.picks('Spock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat paper', function(){

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function(){

        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to rock', function(){

        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });      

    });

    describe('Spock', function(){

      it('should beat scissors', function(){

        player1.picks('Spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should beat rock', function(){

        player1.picks('Spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function(){

        player1.picks('Spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to lizard', function(){

        player1.picks('Spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });      

    });

  });



  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors', 'lizard', 'Spock'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null]);

      });

    });

  });

  describe('it writes a sentence to declare the winner', function() {

    it('should display the name of the winner', function() {
          player1.picks('rock');
          player2.picks('lizard');
          expect(game.displayResult()).toContain('Alex');

    });

    it('should display the name of the loser', function() {
          player1.picks('rock');
          player2.picks('lizard');
          expect(game.displayResult()).toContain('Bob');

    });

    it('should say that Spock smashes scissors', function(){ 

          player1.picks('Spock');
          player2.picks('scissors');
          expect(game.displayResult()).toContain('smashes');

    });

    it('should say that Spock vaporizes rock', function(){ 

          player1.picks('Spock');
          player2.picks('rock');
          expect(game.displayResult()).toContain('vaporizes');

    });

  });


});