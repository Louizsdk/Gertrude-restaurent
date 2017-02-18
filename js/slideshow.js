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
