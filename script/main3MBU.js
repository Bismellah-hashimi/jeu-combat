console.log("Je ne suis pas fou !! je suis ' --");


// Variables de base du jeu
let vieDuBoss = 100; // Vie initiale du boss
let vieDuJoueur = 100 //vie initiale du joueur
let minDegats = 20; // Dégâts minimum que le joueur peut infliger
let maxDegats = 60; // Dégâts maximum que le joueur peut infliger
let tempsAttaque = 1000; // Temps entre chaque attaque en millisecondes

// On le met en global pour éviter la répétition de code
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


function demanderVieBoss() {
    let valide = false;
    let compteur = 0;
    log.textContent = "Le combat contre le boss commence !\n";


    while (valide == false) { // valide = true             valide == true         valide === true
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
            throw new TypeError('Vous avez esseyé toutes vos chances');
        }
    }
}

function demanderVieDuJoueur() {
    let valide = false;
    let compteur = 0;
    log.textContent = "Le combat contre le boss commence !\n";


    while (valide == false) {
        let testNumero = prompt("Entrez la vie du joueur");
        testNumero = parseInt(testNumero);
    
        // si c'est un chiffre
        if ((!isNaN(testNumero)) && ((testNumero) > 0)) {
            console.log("Le numbre est valide");
            valide = true;
            vieDuJoueur = testNumero;
            return;
        }
        else {
            console.log("Le chifre n'est pas valide.");
        }
        compteur++;
        //si le test sera fals cinq fois ou plus....
        if (compteur >= 5) {
            throw new TypeError('Vous avez esseyé toutes vos chances');
            //Il y aura un message d'erreur (vous avez essayé toutes vos chances. Le programme va se fermer)            console.log("vous aves essayer tout vos chances. Le preograme va se fermer");
            //le programe va se fermer.
            return;
        }
    }
}

function combat(){
    // Calcul des dégâts infligés au boss
    console.log("(combat)La vie actuelle du bosse est de : " + vieDuBoss);

    
 
     while(vieDuBoss >= 0){
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
                     break;
                    // Ici, vous pouvez ajouter la logique pour restaurer la vie du joueur
                    
                case "3":
                    log.textContent += "Le joueur utilise un joker !\n";
                    // Ici, vous pouvez ajouter la logique pour utiliser un joker
                    let  = Math.random()
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
                    log.textContent += "Action non reconnue. \n";
            }

            if (vieDuBoss < 0) {
                vieDuBoss = 0; // S'assurer que la vie ne devient pas négative
            }

            // Afficher la vie restante du boss
            log.textContent += `Vie restante du boss : ${vieDuBoss}\n`;

            // Vérifier si le boss est vaincu
            if (vieDuBoss <= 0) {
                // clearInterval(interval); // Arrêter la boucle d'attaque
                log.textContent += "Le boss est vaincu ! Victoire du joueur !\n";
                return 
            }
        }
        log.textContent +="Le bosse est vaincu..."
    }
  

function attaquerBoss() {
    return Math.floor(Math.random() * (maxDegats - minDegats + 1)) + minDegats;
}

 //à partire de la commence le combat{}
