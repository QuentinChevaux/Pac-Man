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

setInterval(tour_de_jeu,500);

let columns = 19;
let rows = 22;

let niveau = document.getElementById("niveau_grid");

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

function tour_de_jeu() {
    play(); 
    affiche_pacman();
}

let player_position = {
    x : 5,
    y : 2,
    direction : 0
}

function affiche_pacman() {
    let player = document.createElement("div")
    player.className = "player"
    niveau.appendChild(player);

    player.style.gridRowStart = player_position.x;
    player.style.gridColumnStart = player_position.y;
}
