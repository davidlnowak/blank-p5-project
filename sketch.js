var bubbles = [];

var setup = function() {
  createCanvas(800, 600);

  loadBubbles(500);
};

var loadBubbles = function(totalBubbles) {
  for (var index = 0; index < totalBubbles; ++index) {
    bubbles.push(new Bubble(random(25, width-25), random(100, height)))
  }
};

var draw = function() {
  background(100);

  bubbles.forEach(function updateAndDisplay (bubble) {
    bubble.display();
    bubble.update();
  });
};
