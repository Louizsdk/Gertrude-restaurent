// Fonction SlideShow au click //
var image0 = document.getElementById('image');
image0.src = contenu.images[0];

var bouton0 = document.getElementById('bouton0');
bouton0.onclick = function() {

	image0.src = contenu.images[0];
};
var bouton1 = document.getElementById('bouton1');
bouton1.onclick = function() {
	image0.src = contenu.images[1];
};
var bouton2 = document.getElementById('bouton2');
bouton2.onclick = function() {
	image0.src = contenu.images[2];
};
var bouton3 = document.getElementById('bouton3');
bouton3.onclick = function() {
	image0.src = contenu.images[3];
};
// fonction slide show automatique //
var i = 0;

function changementdimage() {
	document.getElementById('image').src = contenu.images[i];
	if (i < contenu.images.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout(changementdimage, 5000);
}

changementdimage();
// Fin fonction Slide Show

// Titre + description
document.getElementById('titre_principal').innerHTML = contenu.name;
document.getElementById('description').innerHTML = contenu.description;
// Fin Titre + Description

// Creation balise html pour chaque plat de la carte :
var menuCount = [0, 0, 0];

function ajout_PLAT() {
	for (var j = 0; j < contenu.carte.length; j++) {
		var plat = document.createElement('div');
		plat.classList.add("plat");
		var img_plat = document.createElement('img');

		img_plat.src = contenu.images[j + 1];
		plat.appendChild(img_plat);
		plat.innerHTML += "<h1 class =titre_plat>" + contenu.carte[j].name + "</h1>";
		plat.innerHTML += "<p class =description_plat>" + contenu.carte[j].description + "</p>";
		plat.innerHTML += "<p class=price_plat>" + contenu.carte[j].price + "</p>";
		plat.innerHTML += "<input type=button value=panier class=button name=button>";
		document.getElementById('carte').appendChild(plat);
	}
}
ajout_PLAT();

function compteur(i) {
    menuCount[i]++;
    createPanier();
}

function removeMenue(i){
  menuCount[i]--;
  createPanier();
}
// Fin sa création de balise html //

// debut fonction panier //
var panier = document.getElementById('panier');
var createPanier = function() {
    panier.innerHTML = '';
    var totalPrice = 0;
    var headPanier = panier.insertRow(0);
    headPanier.innerHTML = '<th>Nom du plat</th><th>Prix unitaire</th><th>quantité</th><th>sous-total</th>';

    for (var i = 0; i < contenu.carte.length; i++) {
        if (menuCount[i] !== 0) {
            var menu = contenu.carte[i];
            var menuSousTotalPrice = parseInt(menu.price) * menuCount[i];
            totalPrice += menuSousTotalPrice;
            var nouvelleLigne = panier.insertRow(-1);
            nouvelleLigne.innerHTML = '<td>' + menu.name + '</td><td>' + menu.price + '</td><td>' + menuCount[i] + '</td><td>' + menuSousTotalPrice + '€</td><td><button onclick="removeMenue('+i+')" class=buttonRemove>-</button>';
        }
    }
    var total = panier.insertRow(-1);
    total.innerHTML = '<td>TOTAL</td><td></td><td></td><td>' + totalPrice + ' €</td>';
};
createPanier();


//
var contact = document.getElementById("contact");
contact.innerHTML = "<h4>" + contenu.baseline + "</h4> <p>" + contenu.addresse + "</p> <p>" + contenu.codePostale + " " + contenu.ville + "</p>";
