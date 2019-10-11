/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/


let newb = 1
/*const calcul = function (i,b) {
  let i = 1;
let b = 1;
  do { 
    calcul(i,b);
  } while (i != 26 && b != 100);  
  do {
    b = b++;
    result = [i, b];
  } while (b < 100);
  function second (i,b) {
    if ( b === 100) {
      let b = 0;
      let i = i + 1;
      return result;
    }
   
  }
}*/

let i = 1;
let a = 1;
let result = [];
for ( let i = 1; i < 100; i++) {
  result.push(i,a)
for ( let a = 1; i > 100; a + 1){
  result.push(i,a)
  return result
}
}
console.log(result)