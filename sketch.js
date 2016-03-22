var setup = function setup() {
  createCanvas(600, 600);
  background(100);

  // Rocket nose
  fill('#DF3A01');
  triangle(300, 50, 240, 150, 360, 150);

  // Rocket body
  fill('#D8D8D8');
  rect(240, 150, 120, 350);

  // Window
  fill('#030A6B');
  ellipse(300, 225, 60, 60);

  fill('#81BEF7');
  ellipse(300, 225, 48, 48);

  // Fins
  fill('#DF3A01');
  quad(240, 400, 175, 460, 175, 500, 240, 475);
  quad(360, 400, 425, 460, 425, 500, 360, 475);

  // Thruster
  fill('#2E2E2E');
  quad(250, 500, 245, 517, 355, 517, 350, 500);
};
