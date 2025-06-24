// Variables de base du jeu
let vieBoss = 100; // Vie initiale du boss
let minDegats = 20; // Dégâts minimum que le joueur peut infliger
let maxDegats = 40; // Dégâts maximum que le joueur peut infliger
let tempsAttaque = 1000; // Temps entre chaque attaque en millisecondesq    

// Fonction pour générer des dégâts aléatoires entre minDegats et maxDegats
function attaquerBoss() {
    return Math.floor(Math.random() * (maxDegats - minDegats + 1)) + minDegats;
}


// Fonction pour commencer le combat
function commencerCombat() {
    // Réinitialisation de la vie du boss à chaque nouveau combat
    var vieJoueur = prompt("entrez la vie de votre personnage "); // Vie du joueur (optionnel, pas utilisé dans ce combat)
    vieBoss = prompt("Entrez la vie initiale du boss (par défaut 100) :") || 100;

    let log = document.getElementById("gameLog"); // Zone pour afficher les logs
    log.textContent = "Le combat contre le boss commence !\n";

    // Boucle de combat : attaque jusqu'à ce que la vie du boss soit épuisée
    let interval = setInterval(function() {
        // Calcul des dégâts infligés au boss
        var choix = prompt("arme, boire une potion de vie, ou utiliser un joker");
        switch (choix){
            case"1":
                log.textContent += "Le joueur attaque avec son arme !\n";
                break;
            case "2":
                log.textContent += "Le joueur boit une potion de vie !\n";
                // Ici, vous pouvez ajouter la logique pour restaurer la vie du joueur
                break;
            case "3":
                log.textContent += "Le joueur utilise un joker !\n";
                // Ici, vous pouvez ajouter la logique pour utiliser un joker
                break;
            default:
                log.textContent += "Action non reconnue. Le joueur attaque avec son arme par défaut.\n";
        }
        let degats = attaquerBoss();

        // Afficher l'attaque et la vie restante du boss
        log.textContent += `Le joueur attaque le boss et inflige ${degats} points de dégâts.\n`;
        
        // Réduire la vie du boss
        vieBoss -= degats;
        
        if (vieBoss < 0){
            vieBoss = 0; // S'assurer que la vie ne devient pas négative
        }

        // Afficher la vie restante du boss
        log.textContent += `Vie restante du boss : ${vieBoss}\n`;

        // Vérifier si le boss est vaincu
        if (vieBoss <= 0) {
            clearInterval(interval); // Arrêter la boucle d'attaque
            log.textContent += "Le boss est vaincu ! Victoire du joueur !\n";
        }
    }, tempsAttaque); // Attaquer toutes les `tempsAttaque` millisecondes
}

// Ajouter un événement pour démarrer le combat au clic sur le bouton
document.getElementById("startGameBtn").addEventListener("click", commencerCombat);
