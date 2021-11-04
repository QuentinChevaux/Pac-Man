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
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
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

let grille_reset = JSON.parse(JSON.stringify(grille))

let niveau = document.getElementById("niveau_grid");

let columns = 19;
let rows = 22;

let score = 10;

let score_precedent = 0;

//play();

let interval = setInterval(tour_de_jeu, 500);

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

        score += (10 * tabFantome.length)

        document.getElementById("score_valeur").innerHTML = score ;

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

    if (gagne) {

        alertify.alert("Vous Avez Gagné !! &#127881; &#127942;");
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
        x : 10,
        y : 11,
        direction : 4
    }
]

document.getElementById("valider_nb_fantome").addEventListener('click', nombre_fantome);

function nombre_fantome() {

    let nb = document.getElementById("nombre_fantome").value

    clearInterval(interval);
    
    grille = JSON.parse(JSON.stringify(grille_reset))

    tabFantome = []
    
    spawn.x = 1
    spawn.y = 2
    spawn.direction = 1
        
    score = 0;
    
    interval = setInterval(tour_de_jeu, 500)  
    
    for (j = 0; j < nb; j++) {    

       tabFantome.push({
        x : 10,
        y : 11,
        direction : 4
        })

    }

}

let tabFantome_reset = JSON.parse(JSON.stringify(tabFantome))

function affiche_fantome(num) {
    let fantome = document.createElement("div")
    fantome.className = "fantome_" + (num % 4)
    niveau.appendChild(fantome);

    fantome.style.gridColumnStart = tabFantome[num].x;
    fantome.style.gridRowStart = tabFantome[num].y;    
}

function clip_fantome(num) {
        
    if (grille[tabFantome[num].y-1][tabFantome[num].x-1] == 0) {

        if (tabFantome[num].direction == 1) {
            tabFantome[num].x = tabFantome[num].x-1;
        }

        else if (tabFantome[num].direction == 2) {
            tabFantome[num].y = tabFantome[num].y-1;
        }

        else if (tabFantome[num].direction == 3) {
            tabFantome[num].x = tabFantome[num].x+1;
        }

        else if (tabFantome[num].direction == 4) {
            tabFantome[num].y = tabFantome[num].y+1;
        }
        
    } 
}

function deplacer_fantome(num) {

    tabFantome[num].direction = getRandomInt(4)+1       

    if (tabFantome[num].direction == 1) {
        tabFantome[num].x = tabFantome[num].x+1;
    }
    else if (tabFantome[num].direction == 2) {
        tabFantome[num].y = tabFantome[num].y+1;
    }
    else if (tabFantome[num].direction == 3) {
        tabFantome[num].x = tabFantome[num].x-1;
    }
    else if (tabFantome[num].direction == 4) {
        tabFantome[num].y = tabFantome[num].y-1;
    }

}

function tp_fantome(num) {

    if (tabFantome[num].x < 1) {

        tabFantome[num].x = 19 ;

    }

    if (tabFantome[num].x > 19) {

        tabFantome[num].x = 1;

    }
}

function defaite(num) {

    let pacman_position_x = spawn.x
    let pacman_position_y = spawn.y

    let fantome_position_x = tabFantome[num].x
    let fantome_position_y = tabFantome[num].y

    if (pacman_position_x == fantome_position_x && pacman_position_y == fantome_position_y) {

        setTimeout(() => {
            alertify
            .alert("Vous Avez Perdu ! &#128078;");
        }, 200);
        
        clearInterval(interval);

    }
}

document.getElementById("restart").addEventListener('click', reset);

function reset() {

    clearInterval(interval);

    grille = JSON.parse(JSON.stringify(grille_reset))
    tabFantome = JSON.parse(JSON.stringify(tabFantome_reset))

    spawn.x = 1
    spawn.y = 2
    spawn.direction = 1
    
    for (i = 0; i < tabFantome.length; i++) {
        tabFantome.x = 10
        tabFantome.y = 11
        tabFantome.direction = 4
    }

    score_precedent = score;

    document.getElementById("score_precedent").innerHTML = score_precedent;

    score = 0;

    interval = setInterval(tour_de_jeu, 500)   
}

function tour_de_jeu() {

    play(); 
    deplacer();
    tp();
    clip();
    manger();   
    
    affiche_pacman();

    for (i = 0; i < tabFantome.length; i++) {

        defaite(i); // Avant que le fantome se deplace
        tp_fantome(i);
        deplacer_fantome(i);
        clip_fantome(i);
        defaite(i);
        affiche_fantome(i);

    }

    setTimeout(victoire, 100);

}

mouvement();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }