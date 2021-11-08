class Fantome {
    x;
    y;
    direction;

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    affiche(num) {
        let fantome = document.createElement("div")
        fantome.className = "fantome_" + (num % 4)
        niveau.appendChild(fantome);
    
        fantome.style.gridColumnStart = this.x;
        fantome.style.gridRowStart = this.y;    
    }

    clip(grille) {
        
        if (grille.Grille[this.y-1][this.x-1] == 0) {
    
            if (this.direction == 1) {
                this.x = this.x-1;
            }
    
            else if (this.direction == 2) {
                this.y = this.y-1;
            }
    
            else if (this.direction == 3) {
                this.x = this.x+1;
            }
    
            else if (this.direction == 4) {
                this.y = this.y+1;
            }
            
        } 
    }

    deplacer() {

        this.direction = getRandomInt(4)+1       
    
        if (this.direction == 1) {
            this.x = this.x+1;
        }
        else if (this.direction == 2) {
            this.y = this.y+1;
        }
        else if (this.direction == 3) {
            this.x = this.x-1;
        }
        else if (this.direction == 4) {
            this.y = this.y-1;
        }
    
    }
    
    tp() {

        if (this.x < 1) {
    
            this.x = 19 ;
    
        }
    
        if (this.x > 19) {
    
            this.x = 1;
    
        }
    }

    defaite(spawn) {

        let pacman_position_x = spawn.x
        let pacman_position_y = spawn.y
    
        let fantome_position_x = this.x
        let fantome_position_y = this.y
    
        if (pacman_position_x == fantome_position_x && pacman_position_y == fantome_position_y) {
    
            setTimeout(() => {
    
                alertify.prompt("Vous Avez Perdu ! &#128078;", "Entrez Votre Nom",
                function(evt, value ){
    
                nom = value
    
                }); 
                
            }, 200);
            
            clearInterval(interval);
    
        }
    }
    
}