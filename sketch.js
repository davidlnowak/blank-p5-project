var setup = function () {
  createCanvas(400, 400);
  background(255);

  // Main Cabinet
  fill(0);
  rect(75, 200, 250, 175, 10);

  // Screen
  fill(180);
  rect(90, 215, 175, 145, 25);

  // Panel
  fill(210);
  rect(270, 215, 40, 145);

  // knobs
  ellipse(290, 240, 24, 24);
  ellipse(290, 240, 14, 14);
  ellipse(290, 275, 24, 24);
  ellipse(290, 275, 14, 14);

  // Speaker
  rect(273, 300, 34, 55);
  line(273, 305, 307, 305);
  line(273, 310, 307, 310);
  line(273, 315, 307, 315);
  line(273, 320, 307, 320);
  line(273, 325, 307, 325);
  line(273, 330, 307, 330);
  line(273, 335, 307, 335);
  line(273, 340, 307, 340);
  line(273, 345, 307, 345);
  line(273, 350, 307, 350);

  // Feet
  rect(100, 375, 25, 5);
  rect(275, 375, 25, 5);

  // Antenna
  line(300, 200, 180, 55);
  ellipse(180, 55, 6, 6);

  line(300, 200, 380, 90);
  ellipse(380, 90, 6, 6);
};
