// L'instruction switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
// Le switch est semblable à une condition dans laquelle on va pouvoir générer autant d’issues que l’on souhaite.
function changeimage(n) {
switch (n) {
// switch (expression)
case 1:
document.getElementById("image1").src='assets/img/image1_2.jpg';
break;

case 2:
document.getElementById("image2").src='assets/img/image2_2.jpg';
break;

case 3:
document.getElementById("image3").src='assets/img/image3_2.jpg';
break;

case 4:
document.getElementById("image4").src='assets/img/image4_2.jpg';
break;

case 5:
document.getElementById("image5").src='assets/img/image5_2.jpg';
break;
}
}


// tuto: 
// switch (expression) {
//   case valeur1:
//     // Instructions à exécuter lorsque le résultat
//     // de l'expression correspond à valeur1
//     instructions1;
//     [break;]
//   case valeur2:
//     // Instructions à exécuter lorsque le résultat
//     // de l'expression correspond à valeur2
//     instructions 2;
//     [break;]
//   ...
//   case valeurN:
//     // Instructions à exécuter lorsque le résultat
//     // de l'expression à valeurN
//     instructionsN;
//     [break;]
//   [default:
//     // Instructions à exécuter lorsqu'aucune des valeurs
//     // ne correspond
//     instructions_def;
//     [break;]]
// }
