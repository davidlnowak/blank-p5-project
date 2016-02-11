var bubbles = [];

var loadBubbles = function(totalBubbles) {
  for (var index = 0; index < totalBubbles; ++index) {
    bubbles.push(new Bubble(random(25, width-25), random(height/2-100, height/2+100)))
  }
};

var setup = function() {
  createCanvas(800, 600);

  loadBubbles(500);
};

var draw = function() {
  background(100);

  var currentBubble = 0
  while (currentBubble < 500) {
    bubbles[currentBubble].display();
    bubbles[currentBubble].update();

    currentBubble++;
  };
};
