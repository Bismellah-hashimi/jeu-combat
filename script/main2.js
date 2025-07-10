// Variables de base du jeu
let vieDuBoss = 100; // Vie initiale du boss
let vieDuJoueur = 100 //vie initiale du joueur
let minDegats = 20; // Dégâts minimum que le joueur peut infliger
let maxDegats = 60; // Dégâts maximum que le joueur peut infliger
let tempsAttaque = 1000; // Temps entre chaque attaque en millisecondes

// Fonction pour générer des dégâts aléatoires entre minDegats et maxDegats
function commencerLeJeu(){
    console.log("Commencement du jeu !!");
    demanderVieBoss();
   

    // combat() !! ;
    
let vieduboss;
while (isNaN(vieDuBoss)) {
  
     
    console.log("Ici on demande la vie du joueur...")
    // Réinitialisation de la vie du boss à chaque nouveau combat
let log = document.getElementById("gameLog"); // Zone pour afficher les logs
log.textContent = "Le combat contre le boss commence !\n";

}
let vieDuJoueur;
  while (isNaN(vieDuJoueur)){
        vieDuJoueur = prompt("Veillez insérer la vie du joueur.");
        
    }
}


function demanderVieBoss() {


    let valide = true;
    let compteur = 0;
    let log = document.getElementById("gameLog"); // Zone pour afficher les logs
    log.textContent = "Le combat contre le boss commence !\n";


    while (valide = true) {
        let testNumero = prompt("Entrez la vie du bosse");
        testNumero = parseInt(testNumero);
    
        // si c'est un chiffre
        if ((!isNaN(testNumero)) && ((testNumero) > 0)) {
            console.log("Le numbre est valide");
            valide = true;
            vieDuBoss = testNumero;
            return;
        }
        else {
            console.log("Le chifre n'est pas valide.");
        }
        compteur++;
        //si le test sera fals cinq fois ou plus....
        if (compteur >= 5) {
            console.log("vous avez esseyé toutes vou chances")
            //Il y aura un message d'erreur (vous avez essayé toutes vos chances. Le programme va se fermer)            console.log("vous aves essayer tout vos chances. Le preograme va se fermer");
            //le programe va se fermer.
            return;
        }
    }
}


function attaquerBoss() {
    let test = valide;
    return Math.floor(Math.random() * (maxDegats - minDegats + 1)) + minDegats;
}


 //à partire de la commence le combat{}
