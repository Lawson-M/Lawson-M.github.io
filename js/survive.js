
function enemyGeneration(bulls){
    const enemyContainer = document.getElementById('enemy');
    ran = Math.floor(Math.random() * 500 + 1);
    bulls.push({xpos: ran, ypos:490});

    enemy.innerHTML='';

    for(let bull of bulls){
        bull.ypos-=10;
        enemy.innerHTML+=`
            <div  class="enemy" style="left: ${bull.xpos}px bottom: ${bull.ypos}px">
            </div>
        `;
    }

}

document.addEventListener('keydown', function(event) {
    const player = document.getElementById('character');
    let pos = parseInt(player.style.left) || 250;
    if(pos>465){
        pos=460;
    }else if (pos<15){
        pos=20;
    }

    const step = 10;

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

let bulls = [];
setInterval(() => {
    enemyGeneration(bulls);
}, 100);