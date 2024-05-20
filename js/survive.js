let gameInterval;

//Game setup, starts Interaval for collision and enemy generation
function startGame() {
    const player = document.getElementById('character');
    player.style.left = '250px'; // Set initial position for the player
    gameInterval = setInterval(() => {
        enemyGeneration(bulls);
        checkCollision();
    }, 100);//Adjust interval to change difficulty
}

//Will spawn 1 enemy every Interval from game setup
function enemyGeneration(bulls) {
    //game will keep going until a collision happens causing "game over"
    if (gameover==false){
        //Grabbing container elements from html
        const enemyContainer = document.getElementById('enemy');
        const score = document.getElementById('score')

        // Create and add a new enemy
        const ran = Math.floor(Math.random() * 490) + 1;
        bulls.push({xpos: ran, ypos: 490});
        const newEnemy = document.createElement('div');
        newEnemy.className = 'enemy'; 
        newEnemy.style.position = 'absolute';
        newEnemy.style.left = `${ran}px`;
        newEnemy.style.bottom = `490px`;

        enemyContainer.appendChild(newEnemy);
        let index=0;

        // Update positions of all existing enemies
        for(let bull of bulls){
            bull.ypos-=speed; //moves the enemy down the screen for the set speed

            //if the enemy has reached the bottom of the screen, remove it, and add to score
            if (bull.ypos<=0){
                enemyContainer.removeChild(enemyContainer.children[index]);//removes the current enemy
                bulls.splice(index,1);//addes new enemy with updated position;
                scoreCount++;
                score.innerHTML=`SCORE: ${scoreCount}`
            }else{//If the enemy has yet to reach the bottom of the screen, update it.
                enemyContainer.children[index].style.bottom=`${bull.ypos}px`
            }
            index++;
        }
    //Stops game interval, and displays game over screen
    }else {
        clearInterval(gameInterval); //stops interval

        //grabs and displays game over screen
        const gameoverScreen = document.getElementById('gameoverScreen');
        gameoverScreen.innerHTML = `
            GAME OVER
            <button id="reloadButton">Play Again</button>
        `;

        //creates a "play again" button that will refresh the page.
        const reloadButton = document.getElementById('reloadButton');
        reloadButton.addEventListener('click', () => {
            window.location.reload();
            console.log("reload button clicked")
        });
    }
}

//Will check if the player is colliding with an enemy every interval, if they are the game will end
function checkCollision(){
    const enemyContainer = document.getElementById('enemy');
    const player = document.getElementById('character');

    //iterating through every enemy and checking collision
    for(let en of enemyContainer.children){

        let ePos = parseInt(en.style.left)
        let pPos = parseInt(player.style.left)

        //if the player is colliding with an enemy set gameover to true
        if (parseInt(en.style.bottom)<20 && ePos>(pPos-9) && ePos<(pPos+20)){
            gameover = true;
        }
    }

}

let gameover = false; //when true the game will end
let bulls = []; //helps track enemy position
let scoreCount=0;// will be added too for every red dot that reaches the bottom, will stop when game ends
let speed=5; //the speed that the enemys will step down the screen

startGame();

//Keyboard input
document.addEventListener('keydown', function(event) {
    if (gameover==false){
        const player = document.getElementById('character');
        //takes in current position, or sets player back to middle if no position found
        let pos = parseInt(player.style.left) || 250;
        const step = 10; //speed player will move
    
        //creates border for player movement
        if(pos>465){
            pos=460;
        }else if (pos<15){
        pos=20;
        }

        //setting the controls for the game
        switch(event.key){
            //Moves the player left
            case"a":
                player.style.left = `${pos-step}px`;
                break;

            //moves the player right
            case"d":
                player.style.left = `${pos+step}px`;
                break;
        }
    }
});


