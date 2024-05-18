let gameInterval;

function startGame() {
    

    gameInterval = setInterval(() => {
        enemyGeneration(bulls);
        checkCollision();
    }, 100);
}

function enemyGeneration(bulls) {
    if (gameover==false){
        const enemyContainer = document.getElementById('enemy'); // Ensure this element exists in your HTML
        const score = document.getElementById('score')

        // Create and add a new enemy if needed
        const ran = Math.floor(Math.random() * 500) + 1;
        bulls.push({xpos: ran, ypos: 490});
        const newEnemy = document.createElement('div');

        newEnemy.className = 'enemy';
        newEnemy.style.position = 'absolute';
        newEnemy.style.left = `${ran}px`;
        newEnemy.style.bottom = `490px`;

        enemyContainer.appendChild(newEnemy);
        // Update positions of all existing enemies
        let index=0;
        for(let bull of bulls){
            bull.ypos-=speed;
            if (bull.ypos<=0){
                enemyContainer.removeChild(enemyContainer.children[index]);
                bulls.splice(index,1);
                scoreCount++;
                score.innerHTML=`SCORE: ${scoreCount}`
            }else{
                enemyContainer.children[index].style.bottom=`${bull.ypos}px`
            }
            index++;
        }
    }else {
        clearInterval(gameInterval);

        const gameoverScreen = document.getElementById('gameoverScreen');
        gameoverScreen.innerHTML = `
            GAME OVER
            <button id="reloadButton">Play Again</button>
        `;

        const reloadButton = document.getElementById('reloadButton');
        reloadButton.addEventListener('click', () => {
            window.location.reload();
            console.log("reload button clicked")
        });
    }
}

function checkCollision(){
    const enemyContainer = document.getElementById('enemy');
    const player = document.getElementById('character');


    for(let en of enemyContainer.children){

        let ePos = parseInt(en.style.left)
        let pPos = parseInt(player.style.left)

        if (parseInt(en.style.bottom)<20 && ePos>(pPos-10) && ePos<(pPos+10)){
            gameover = true;
        }
    }

}

document.addEventListener('keydown', function(event) {
    const player = document.getElementById('character');
    let pos = parseInt(player.style.left) || 250;
    const step = 10;
    
    if(pos>465){
        pos=460;
    }else if (pos<15){
        pos=20;
    }

    switch(event.key){
        case"w":
            console.log("up");
            break;

        case"a":
            console.log("left");
            player.style.left = `${pos-step}px`;
            break;

        case"d":
            console.log("right");
            player.style.left = `${pos+step}px`;
            break;
    }
});

let gameover = false;
let bulls = [];
let scoreCount=0;
let speed=5;

startGame();

