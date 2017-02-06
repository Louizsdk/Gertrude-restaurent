// Fonction Slide Show
var imageSlides = document.getElementById('slides');
var singleSlide = document.getElementsByClassName('slide');
for (var k = 0; k < contenu.images.length; k++) {
    var newSlide = document.createElement('li');
    newSlide.className = 'slide';
    imageSlides.appendChild(newSlide);
    singleSlide[k].style.backgroundImage = 'url(' + contenu.images[k] + ')';
}
singleSlide[0].classList.add('showing');

var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);
function nextSlide() {
    singleSlide[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % singleSlide.length;
    singleSlide[currentSlide].className = 'slide showing';
}
// Fin fonction Slide Show

// Titre + description
document.getElementById('titre_principal').innerHTML = contenu.name;
document.getElementById('description').innerHTML = contenu.description;
// Fin Titre + Description

// Creation balise html pour chaque plat de la carte :
var menuCount = [];
function ajout_PLAT() {
    for (var j = 0; j < contenu.carte.length; j++) {
        var plat = document.createElement('div');
        plat.classList.add("plat");
        var img_plat = document.createElement('img');
        img_plat.src = contenu.carte[j].image;
        plat.appendChild(img_plat);
        plat.innerHTML += "<h1 class ='titre_plat'>" + contenu.carte[j].name + "</h1>";
        plat.innerHTML += "<p class ='description_plat'>" + contenu.carte[j].description + "</p>";
        plat.innerHTML += "<div class='footer-plat'> <p class='price_plat'>" + contenu.carte[j].price + "</p><button onclick='compteur(" + j + ")' id='button'" + j + ">Ajouter au panier</button></div>";
        document.getElementById('carte').appendChild(plat);
        menuCount.push(0);
    }
}
ajout_PLAT();

// Fonction pour bouton panier
function compteur(i) {
    menuCount[i]++;
    createPanier();
}

function removeMenue(i) {
    menuCount[i]--;
    createPanier();
}
// fin fonction pour bouton panier
// Fin sa création de balise html //

// debut fonction panier //
var panier = document.getElementById('panier');
var btnPanier = document.getElementById('btn-panier');
var countClickOnPanier = 0;

btnPanier.addEventListener('click', function() {
    if (countClickOnPanier === 0) {
        panier.style.display = "block";
        countClickOnPanier = 1;
    } else {
        countClickOnPanier = 0;
        panier.style.display = "none";
    }
});

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
            nouvelleLigne.innerHTML = '<td>' + menu.name + '</td><td>' + menu.price + '</td><td>' + menuCount[i] + '</td><td>' + menuSousTotalPrice + '€</td><td><button onclick="removeMenue(' + i + ')" class="buttonRemove">-</button>';
        }
    }
    btnPanier.innerHTML = '<i class="fa fa-shopping-basket" aria-hidden="true"></i> ' + totalPrice + ' €';
    var total = panier.insertRow(-1);
    total.innerHTML = '<td>TOTAL</td><td></td><td></td><td>' + totalPrice + ' €</td><td><button class="buttonPaiement">Payer</button></td>';
};
createPanier();

// Integration info contact
var contact = document.getElementById("contact");
contact.innerHTML = "<h4>" + contenu.baseline + "</h4> <p>" + contenu.adresse + "</p> <p>" + contenu.codePostal + " " + contenu.ville + "</p>";
