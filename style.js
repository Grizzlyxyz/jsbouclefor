// LA BOUCLE FOR
// Déclarer une variable du nom de multiplicateur valant 5
// Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.
console.log('Exo 01')
let multiplicateur = 5;for(let i = 1; i <= 9; i++){
 console.log(multiplicateur * i);
};// La même chose sauf que on incrémente par deuxconsole.log('Exo 02')
for(let i = 1; i <= 9; i = i + 2){
 console.log(multiplicateur * i);
};// Créer un tableau du nom de prenoms contenant 15 prénoms
// Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau du nom de longPrenomslet prenoms = ['ismail','nisrine','mohamed','benjamin','salma','sonia','abdellah','louis','mourad','nathan','salim','youssef','billel','jonathan','faouzi','joaquim','tim','vadim']