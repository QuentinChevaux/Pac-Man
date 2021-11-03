// FAV ICON
var favicon_images = [
    '/images/favicon/frame_0_delay-0.1s.gif',
    '/images/favicon/frame_1_delay-0.1s.gif',
],
image_counter = 0; // To keep track of the current image

setInterval(function() {
// remove current favicon
if(document.querySelector("link[rel='icon']") !== null)
document.querySelector("link[rel='icon']").remove();
if(document.querySelector("link[rel='shortcut icon']") !== null)
document.querySelector("link[rel='shortcut icon']").remove();

// add new favicon image
document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

// If last image then goto first image
// Else go to next image    
if(image_counter == favicon_images.length -1)
image_counter = 0;
else
image_counter++;
}, 100);

// END FAV ICON

let grille = [                      
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],  
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let score = 0;

let interval = setInterval(tour_de_jeu, 500);

let columns = 19;
let rows = 22;

let niveau = document.getElementById("niveau_grid");

function deplacer() {

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

function mouvement() {

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

function clip() {
        
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

function manger() {

    if (grille[spawn.y-1][spawn.x-1] == 2) {
        
        grille[spawn.y-1][spawn.x-1] = 1

        score += 10

        document.getElementById("score_valeur").innerHTML = score;

    }
}

function tp() {

    if (spawn.x < 1) {

        spawn.x = 19

    }

    if (spawn.x > 19) {

        spawn.x = 1

    }

}

function victoire() {
    
    let gagne = true

    for (let row = 0; row < rows; row++) {

        for (let column = 0; column < columns; column++) {            

            if (grille[row][column] == 2) {
                gagne = false   

            }

        }
    }

    if (gagne == true) {
        alert("Vous Avez Gagné !")
        clearInterval(interval);
    }
}

function play() {

    niveau.innerHTML = ""

    for (let row = 0; row < rows; row++) {

        for (let column = 0; column < columns; column++) {

            if (grille[row][column] == 0) {
            let mur = document.createElement("div");
            mur.className = "mur";
            niveau.appendChild(mur);
            mur.style.gridRowStart = row + 1;
            mur.style.gridColumnStart = column + 1;
            }

            if (grille[row][column] == 1) {
                let sol = document.createElement("div");
                sol.className = "sol";
                niveau.appendChild(sol);
                sol.style.gridRowStart = row + 1;
                sol.style.gridColumnStart = column + 1;
            }

            if (grille[row][column] == 2) {
                let bonbon = document.createElement("div");
                bonbon.className = "bonbon";
                niveau.appendChild(bonbon);
                bonbon.style.gridRowStart = row + 1;
                bonbon.style.gridColumnStart = column + 1;
            }

        }
    }
}

function affiche_pacman() {
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

let spawn = {
    x : 1,
    y : 2,
    direction : 1 // 1 = Droite, 2 = Bas, 3 = Gauche, 4 = Haut
}

let tabFantome = [
    {
        x : 9,
        y : 11,
        direction : 4
    },
    {
        x : 10,
        y : 11,
        direction : 4
    },
    {
        x : 11,
        y : 11,
        direction : 4
    },
    {
        x : 10,
        y : 10,
        direction : 4
    }

]

for (i = 0 < tabFantome) {
    
}

function affiche_fantome() {
    let fantome = document.createElement("div")
    fantome.className = "fantome_1"
    niveau.appendChild(fantome);

    fantome.style.gridColumnStart = spawn_fantome.x;
    fantome.style.gridRowStart = spawn_fantome.y;    
}

function clip_fantome() {
        
    if (grille[spawn_fantome.y-1][spawn_fantome.x-1] == 0) {

        if (spawn_fantome.direction == 1) {
            spawn_fantome.x = spawn_fantome.x-1;
        }

        else if (spawn_fantome.direction == 2) {
            spawn_fantome.y = spawn_fantome.y-1;
        }

        else if (spawn_fantome.direction == 3) {
            spawn_fantome.x = spawn_fantome.x+1;
        }

        else if (spawn_fantome.direction == 4) {
            spawn_fantome.y = spawn_fantome.y+1;
        }
        
    } 
}

function deplacer_fantome() {

    spawn_fantome.direction=getRandomInt(4)+1

    if (spawn_fantome.direction == 1) {
        spawn_fantome.x = spawn_fantome.x+1;
    }
    else if (spawn_fantome.direction == 2) {
        spawn_fantome.y = spawn_fantome.y+1;
    }
    else if (spawn_fantome.direction == 3) {
        spawn_fantome.x = spawn_fantome.x-1;
    }
    else if (spawn_fantome.direction == 4) {
        spawn_fantome.y = spawn_fantome.y-1;
    }

}

function tour_de_jeu() {
    play();
    deplacer();
    clip();

    deplacer_fantome();
    clip_fantome();

    tp(); 
    manger();
    affiche_pacman();
    affiche_fantome();

    setTimeout(victoire, 100);
}

mouvement();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }