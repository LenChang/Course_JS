/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice, gameRunning;

init();

/*-- Callback function menas that it's called by another function. --*/
// function btn(){
//     //DO something here
// }
// // btn() will pass to another func. as an argument.
// document.querySelector('.btn-roll').addEventListener('click', btn);

// anonymous function
document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gameRunning) {

        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // 3. Update the round
        if (dice === 1) {
            nextPlayer();
        } else {
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gameRunning) {

        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

        // if player won the game.
        if (score[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = "Winner";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gameRunning = false;

        } else {
            // Turn to next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameRunning = true;

    document.querySelector('.dice').style.display = 'none';

    // It's a bit faster than querySelector('#score-..')
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}

function nextPlayer() {
    // Return roundScore to zero and turn to next player
    roundScore = 0;

    // document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

    //--- ternary operator ---//
    // As same as listed below.
    // if(activePlayer === 0){
    //     activePlayer === 1;
    // }else{
    //     activePlayer === 0;
    // }
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';
}