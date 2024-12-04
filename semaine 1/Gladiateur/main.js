let a = 2;
let b = 12;
if (a < 15000) {
  console.log("AAAAAAAAAAAAa");
}
console.log(b / a);

function division(c, d) {
  return c / d;
}


function marche(argent, prix, stock) {
  nb_produit = 0;
  while (argent > prix && stock > 0) {
    argent -= prix;
    nb_produit += 1;
    stock -= 1
  }
  console.log(argent, nb_produit);
  return argent, nb_produit;
}

marche(100, 2, 20)