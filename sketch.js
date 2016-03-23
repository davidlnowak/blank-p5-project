var setup = function () {
  createCanvas(600, 500);
  background(80);

  // Left Wing
  fill(255);
  triangle(80,210, 500,100, 190,255);

  // Left Fold
  fill(200);
  triangle(190,255, 500,100, 210,310);

  // Right Wing
  fill(255);
  triangle(245,270, 500,100, 360,340);

  // Right Fold
  fill(140);
  triangle(245,270, 210,310, 270,285);

  // Trail Lines
  strokeWeight(5);
  line(200,330, 90,420);
  line(280,310, 187,400);
};
