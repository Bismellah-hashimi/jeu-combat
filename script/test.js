function start() {
    // Méthode de contrôle d'entrée utilisateur
    let vieDuBoss;
    while(isNan(vieDuBoss)){ // Tant que isNan n'est pas valide ...
        vieDuBoss = prompt("Veuillez insérer la vie du bosse."); // Demande à l'utilisateur de mettre la vie et l'insère dans la var' "vieDuBosse"

        // Essaie de convertir "int" -> "string" (conversion chaine de caractère -> numéro)
        vieDuBoss = parseInt(vieDuBoss);
        // parseInt renvoie "Nan" (NaN signifie « Not a Number » )
    }
}
