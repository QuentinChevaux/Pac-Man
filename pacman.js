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



// let grille_reset = JSON.parse(JSON.stringify(grille))

let grille = new Grille();

let spawn = new Pacman(1, 2, 1); // 1 = Droite, 2 = Bas, 3 = Gauche, 4 = Haut

let tabFantome = [new Fantome(10, 11, 4)]

let interval = setInterval(tour_de_jeu, 500);

let niveau = document.getElementById("niveau_grid");

let nom

let columns = 19;
let rows = 22;

let score = 10;

let score_precedent = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



document.getElementById("vitesse_1").addEventListener('click', vitesse_1);
document.getElementById("vitesse_2").addEventListener('click', vitesse_2);
document.getElementById("vitesse_3").addEventListener('click', vitesse_3);
document.getElementById("vitesse_4").addEventListener('click', vitesse_4);
document.getElementById("vitesse_5").addEventListener('click', vitesse_5);
document.getElementById("vitesse_6").addEventListener('click', vitesse_6);


function vitesse_1() {

    clearInterval(interval)

    interval = setInterval(tour_de_jeu, 500);

}

function vitesse_2() {

    clearInterval(interval)

    interval = setInterval(tour_de_jeu, 400);

}

function vitesse_3() {

    clearInterval(interval)

    interval = setInterval(tour_de_jeu, 300);

}

function vitesse_4() {

    clearInterval(interval)

    interval = setInterval(tour_de_jeu, 200);

}

function vitesse_5() {

    clearInterval(interval)

    interval = setInterval(tour_de_jeu, 100);

}

function vitesse_6() {

    clearInterval(interval)

    interval = setInterval(tour_de_jeu, 50);

}

document.getElementById("valider_nb_fantome").addEventListener('click', nombre_fantome);

function nombre_fantome() {

    let nb = document.getElementById("nombre_fantome").value

    clearInterval(interval);
    
    // grille = JSON.parse(JSON.stringify(grille_reset))

    grille = new Grille();

    tabFantome = []
    
    spawn.x = 1
    spawn.y = 2
    spawn.direction = 1
        
    score = 0;
    
    interval = setInterval(tour_de_jeu, 500)  
    
    for (j = 0; j < nb; j++) {    

       tabFantome.push(new Fantome(10, 11, 4))

    }

}

let tabFantome_reset = JSON.parse(JSON.stringify(tabFantome))

document.getElementById("restart").addEventListener('click', reset);

function reset() {

    clearInterval(interval);

    // grille = JSON.parse(JSON.stringify(grille_reset))
    
    //tabFantome = JSON.parse(JSON.stringify(tabFantome_reset))

    tabFantome = []

    grille = new Grille();

    spawn.x = 1
    spawn.y = 2
    spawn.direction = 1
    
    for (i = 0; i < tabFantome_reset.length; i++) {
        tabFantome.push(new Fantome(10, 11, 4))
    }

    score_precedent = score;

    document.getElementById("score_precedent").innerHTML = score_precedent;

    document.getElementById("difficulte").innerHTML = "(Avec &nbsp;" + document.getElementById("nombre_fantome").value + "&nbsp; fantomes)"

    score = 10;

    document.getElementById("nom").innerHTML = "JOUEUR " + nom

    interval = setInterval(tour_de_jeu, 500)   
}

function tour_de_jeu() {

    grille.play();

    spawn.mouvement();
    spawn.deplacer();
    spawn.tp();
    spawn.clip(grille);
    spawn.manger(grille);   
    
    spawn.affiche();

    for (i = 0; i < tabFantome.length; i++) {

        tabFantome[i].defaite(spawn); // Avant que le fantome se deplace

        tabFantome[i].tp();
        tabFantome[i].deplacer();
        tabFantome[i].clip(grille);

        tabFantome[i].defaite(spawn);

        tabFantome[i].affiche(i);

    }

    setTimeout(() => {
        
        spawn.victoire(grille)

    }, 100);

}