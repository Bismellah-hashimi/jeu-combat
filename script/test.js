let vieDuBoss = 100; // Vie initiale du boss
let vieDuJoueur = 100 //vie initiale du joueur
let minDegats = 20; // Dégâts minimum que le joueur peut infliger
let maxDegats = 60; // Dégâts maximum que le joueur peut infliger
let tempsAttaque = 1000; // Temps entre chaque attaque en millisecondes

let log = document.getElementById("gameLog"); // Zone pour afficher les logs

// Fonction pour générer des dégâts aléatoires entre minDegats et maxDegats
function commencerLeJeu(){
    console.log("Commencement du jeu !!");
    
    console.log("Demander les valeurs aux joueurs.");

    demanderVieBoss();
    console.log("La vie du boss .. c'est " + vieDuBoss);

    demanderVieDuJoueur();
    console.log("La vie du joueur .. c'est " + vieDuJoueur);

    console.log("\n\n!! Que le combat commence !!");
    combat();
}












function attaquerBoss() {
    return Math.floor(Math.random() * (maxDegats - minDegats + 1)) + minDegats;
}
