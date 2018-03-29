// Random Welcome Message Generator

var textarray = [
"Hello!",
"Hola :D",
"Hey there!",
"Meow",
"Ola!" 
];

function RndText() {
  var rannum= Math.floor(Math.random()*textarray.length);
  document.getElementById('ShowText').innerHTML=textarray[rannum];
}

window.onload = function() { RndText(); }
console.log("Hello")



// Scroll Reveal

var titleReveal = {
  origin: 'left',
  delay    : 200,
  duration: 600,
  distance : '10px',
  scale: 1
};

var contentReveal = {
  origin: 'right',
  delay    : 400,
  duration: 600,
  distance : '10px',
  scale: 1
};

// Customizing a reveal 
window.sr = ScrollReveal();
sr.reveal('.title', titleReveal);
sr.reveal('.content', contentReveal);