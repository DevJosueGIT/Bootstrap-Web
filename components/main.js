var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 85,
});

typewriter.typeString("La capital del Sol").pauseFor(2500).start();

