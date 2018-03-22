(() => {
  console.log ('video stuff fired!');

// add to the string prototype to tap the first letter
String.prototype.capIt = function() {return this.replace(this.charAt(), this.charAt().toUpperCase()); };

const sigils = document.querySelectorAll('.sigilContainer'),
  lightbox = document.querySelector('.lightbox'),
  closeLightbox = lightbox.querySelector('.close-lightbox'),
  vidPlayer = document.querySelector('video');


function loadMovie() {
  // 1. turn on the lightbox
  lightbox.classList.add('show-lightbox');


  //2. grab the right video based on the class name
  var house = this.className.split(' ')[1].capIt();
  vidPlayer.play();
}

function closeLBox() {
  lightbox.classList.remove('show-lightbox');
  vidPlayer.pause();
  vidPlayer.currentTime = 0;
}

sigils.forEach(sigil => sigil.addEventListener('click', loadMovie))
closeLightbox.addEventListener('click', closeLBox)
})();
