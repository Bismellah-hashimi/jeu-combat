// Variables de base du jeu
let vieDuBoss = 100; // Vie initiale du boss
let minDegats = 20; // Dégâts minimum que le joueur peut infliger
let maxDegats = 40; // Dégâts maximum que le joueur peut infliger
let tempsAttaque = 1000; // Temps entre chaque attaque en millisecondesq    

// Fonction pour générer des dégâts aléatoires entre minDegats et maxDegats
function attaquerBoss() {
    return Math.floor(Math.random() * (maxDegats - minDegats + 1)) + minDegats;
}


// Fonction pour commencer le combat
function commencerCombat() {

    let valide = false;
    while (valide == false) {
        let testNumero = prompt("Merci d'entrer un chiffre valide ..");
        console.log(testNumero);


        // si c'est un chiffre
        if (isNaN(testNumero)){
            console.log("Ce n'est pas un chifre");
        }
        
        // ... si c'est en dessus de 0        
        else if(testNumero < 0){
            console.log("le chifre est en desous de zéro.")
        }

        else{
            console.log("Merci !! c'est bien un chifre")
        }

        valide = true;

    }
}

    let vieJoueur;
    while(isNaN (vieJoueur)|| (vieJoueur) < 1){
 vieJoueur = prompt("entrez la vie de votre personnage "); // Vie du joueur (optionnel, pas utilisé dans ce combat)
 vieJoueur = parseInt(vieJoueur)

    }
    
     let vieDuboss;
     while(isNaN(vieDuBoss)){
     vieDuBoss = prompt("Veillez insérer la vie du bosse.");
         // Réinitialisation de la vie du boss à chaque nouveau combat
 
     vieDuBoss = parseInt(vieDuBoss)    
     }
     
    
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
         vieDuBoss -= degats;
         
         if (vieDuBoss < 0){
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
    if (isNaN(x) || x < 1) {
        text = "Ce n'est pas correct!!";
    } else {
        text = "Il est correct";
    }
    document.getElementById("demo").innerHTML = text;
}


// Ajouter un événement pour démarrer le combat au clic sur le bouton
//document.getElementById("startGameBtn").addEventListener("click", commencerCombat);