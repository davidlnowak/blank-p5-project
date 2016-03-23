var setup = function () {
  createCanvas(625, 600);
  background(150);

  // Wheels
  fill(0);
  ellipse(150, 460, 76, 76);
  ellipse(450, 460, 76, 76);
  fill(180);
  ellipse(150, 460, 70, 70);
  ellipse(450, 460, 70, 70);
  stroke(180);

  noFill();
  stroke(0);
  strokeWeight(3);

  // Upper front-end
  bezier(75,450, 120,360, 200,420, 370,395);
  line(75,450, 105, 460);

  // Door panel
  bezier(290,440, 350,460, 360,380, 470,400);

  // Roof
  bezier(210,398, 280,330, 350,320, 535,418);

  // Bottom
  strokeWeight(5);
  line(188,470, 412,470);

  // Rear
  line(488,470, 530,468);
  line(530,468, 535,418);
};
