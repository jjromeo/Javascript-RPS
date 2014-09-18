$(document).ready(function(){
    var player1 = new Player('Jerome');
    var player2 = new Player('Computer');
    var choices = ['rock','paper','scissors','lizard','Spock'];
    var rand = choices[Math.floor(Math.random()*choices.length)];
    $('.choices').hide();
    $('#name-entry').on('submit', function(e){
        e.preventDefault();
        $('.choices').show()
        var player1 = new Player($('#player-name').val());
        var game = new Game(player1, player2);
        $('#input-message').text('Thank you,' + $('#player-name').val() + ' now play');
        $(this).remove(); 
        $(".choices img").on("click", function(){  
            $("#input-message").remove()
            var pick = $(this).data('pick');
            player1.picks(pick);
            player2.picks(rand);
        $("#result").text(game.displayResult());
    });
    });

    


});
