
// Variables de base du jeu
let vieDuBoss = 100; // Vie initiale du boss
let vieDuJoueur = 100 //vie initiale du joueur
let minDegats = 20; // Dégâts minimum que le joueur peut infliger
let maxDegats = 60; // Dégâts maximum que le joueur peut infliger
let tempsAttaque = 1000; // Temps entre chaque attaque en millisecondesq    

// Fonction pour générer des dégâts aléatoires entre minDegats et maxDegats
function attaquerBoss() {
    return Math.floor(Math.random() * (maxDegats - minDegats + 1)) + minDegats;
}

// Fonction pour commencer le combat
function commencerCombat() {

    let valide = false;
    let compteur = 0;

    while (valide == false) {
        let testNumero = prompt("Merci d'entrer un chiffre valide ..");
        console.log(testNumero);

        // si c'est un chiffre
        if ((!isNaN(testNumero)) && ((testNumero) > 0)) {
            console.log("Le numbre est valide");
            valide = true;
        }
        else {
            console.log("Le chifre n'est pas valide.");
        }
        compteur++;
        //si le test sera fals cinq fois ou plus....
        if (compteur >= 5) {
            //Il y aura un message d'erreur (vous avez essayé toutes vos chances. Le programme va se fermer)            console.log("vous aves essayer tout vos chances. Le preograme va se fermer");
            //le programe va se fermer.
            return;
        }

    }

}

while (isNaN(vieDuJoueur) || (vieDuJoueur) < 1) {
    vieDuJoueur = prompt("entrez la vie de votre personnage "); // Vie du joueur (optionnel, pas utilisé dans ce combat)
    vieDuJoueur = parseInt(vieDuJoueur)

}

let vieDuboss;
while (isNaN(vieDuBoss)) {
    vieDuBoss = prompt("Veillez insérer la vie du bosse.");
    // Réinitialisation de la vie du boss à chaque nouveau combat

    vieDuBoss = parseInt(vieDuBoss)
}


let log = document.getElementById("gameLog"); // Zone pour afficher les logs
log.textContent = "Le combat contre le boss commence !\n";

// Boucle de combat : attaque jusqu'à ce que la vie du boss soit épuisée
let interval = setInterval(function () {
    // Calcul des dégâts infligés au boss
    var choix = prompt("arme, boire une potion de vie, ou utiliser un joker");
    switch (choix) {
        case "1":

            log.textContent += "Le joueur attaque avec son arme !\n";
            let degats = attaquerBoss();

            // Afficher l'attaque et la vie restante du boss
            log.textContent += `Le joueur attaque le boss et inflige ${degats} points de dégâts.\n`;

            // Réduire la vie du boss
            vieDuBoss -= degats;

            break;
        case "2":
            log.textContent += "Le joueur boit une potion de vie !\n";
            let chance = Math.random();
            if(chance < 0.05){
                vieDuBoss += 30;
            }else{
            vieDuJoueur += 30;
            }

            // Ici, vous pouvez ajouter la logique pour restaurer la vie du joueur
            break;
        case "3":
            log.textContent += "Le joueur utilise un joker !\n";
            // Ici, vous pouvez ajouter la logique pour utiliser un joker
            let chances = Math.rendom();
            if(chance <0.05){
                degats*2
            }
            else if(chance<0.7){
                vieDuJoueur += 50;
            }
            else {

            }
            break;

        default:
            log.textContent += "Action non reconnue. Le joueur attaque avec son arme par défaut.\n";
    }

    if (vieDuBoss < 0) {
        vieDuBoss = 0; // S'assurer que la vie ne devient pas négative
    }

    // Afficher la vie restante du boss
    log.textContent += `Vie restante du boss : ${vieDuBoss}\n`;

    // Vérifier si le boss est vaincu
    if (vieDuBoss <= 0) {
        clearInterval(interval); // Arrêter la boucle d'attaque
        log.textContent += "Le boss est vaincu ! Victoire du joueur !\n";
    }
}, tempsAttaque); // Attaquer toutes les `tempsAttaque` millisecondes



function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || (x < 1)) {
        text = "Ce n'est pas correct!!";
    } else {
        text = "Il est correct";
    }
    document.getElementById("demo").innerHTML = text;
}


// Ajouter un événement pour démarrer le combat au clic sur le bouton
//document.getElementById("startGameBtn").addEventListener("click", commencerCombat);*/