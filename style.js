// LA BOUCLE FOR
// Déclarer une variable du nom de multiplicateur valant 5
// Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

// La même chose sauf que on incrémente par deuxconsole.log('Exo 02')
// Créer un tableau du nom de prenoms contenant 15 prénoms
// Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau du nom de longPrenomslet prenoms = ['ismail','nisrine','mohamed','benjamin','salma','sonia','abdellah','louis','mourad','nathan','salim','youssef','billel','jonathan','faouzi','joaquim','tim','vadim']

//EXO1

//let multiplicateur = 9;

//for(i = 1; i <= 10; i++){
   // console.log(multiplicateur * i);
//};

//EXO2

let tab = ['aa','eeeeee','rrrrrrrr','e','tttttttt'];
let tab2 = [];

for(i =0; i<tab.length;i++){
    if (tab[i].length > 4){
        tab2.push(tab[i]);
    }
}

console.log(tab2);





