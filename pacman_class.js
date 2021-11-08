class Pacman {
    x;
    y;
    direction;

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    deplacer() {

        if (spawn.direction == 1) {
            spawn.x = spawn.x+1;
        }
        else if (spawn.direction == 2) {
            spawn.y = spawn.y+1;
        }
        else if (spawn.direction == 3) {
            spawn.x = spawn.x-1;
        }
        else if (spawn.direction == 4) {
            spawn.y = spawn.y-1;
        }
    
    }

    mouvement() {

        document.addEventListener("keyup", function(event) {
    
            if (event.key === 'd') {
    
                spawn.direction = 1
    
            }
    
            else if (event.key === 's') {
    
                spawn.direction = 2
    
            }
    
            else if (event.key === 'q') {
    
                spawn.direction = 3
    
            }
    
            else if (event.key === 'z') {
    
                spawn.direction = 4
    
            }
        });
    
    }

    clip() {
        
        if (grille[spawn.y-1][spawn.x-1] == 0) {
    
            if (spawn.direction == 1) {
                spawn.x = spawn.x-1;
            }
    
            else if (spawn.direction == 2) {
                spawn.y = spawn.y-1;
            }
    
            else if (spawn.direction == 3) {
                spawn.x = spawn.x+1;
            }
    
            else if (spawn.direction == 4) {
                spawn.y = spawn.y+1;
            }
            
        } 
    }

    manger() {

        if (grille[spawn.y-1][spawn.x-1] == 2) {
            
            grille[spawn.y-1][spawn.x-1] = 1
    
            score = score + (10 * tabFantome.length)
    
            document.getElementById("score_valeur").innerHTML = score ;
    
        }
    }

    tp() {

        if (spawn.x < 1) {
    
            spawn.x = 19
    
        }
    
        if (spawn.x > 19) {
    
            spawn.x = 1
    
        }
    
    }

    affiche() {
        let player = document.createElement("div")
        player.className = "player"
        niveau.appendChild(player);
    
        player.style.gridColumnStart = spawn.x;
        player.style.gridRowStart = spawn.y;
    
        if (spawn.direction == 1) {
            player.style.transform = 'rotate(0deg)' 
        }
        else if (spawn.direction == 2) {
            player.style.transform = 'rotate(90deg)' 
        }
        else if (spawn.direction == 3) {
            player.style.transform = 'rotate(180deg)' 
        }
        else if (spawn.direction == 4) {
            player.style.transform = 'rotate(270deg)'    
        }
    }
    
}