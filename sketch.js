var bubbles = [];

var setup = function() {
  createCanvas(800, 600);
};

var draw = function() {
  background(100);

  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));

  bubbles.forEach(function updateAndDisplay (bubble) {
    bubble.display();
    bubble.update();
  });
};
