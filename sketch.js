var setup = function setup() {
  createCanvas(800, 600);
  background('#B2D6FB');

  var house = {
    x: 100,
    y: 240,
    houseWidth: 600,
    houseHeight: 350,
    roofHeight: 140,
    chimneyHeight: 190,
    chimneyWidth: 50,
    brickColor: color('#441209'),
    roofColor: color('#2B2820'),
    entranceColor: color('#F5F3E2'),
    doorColor: color('#362B08'),

    draw: function () {
      this.drawUpperRoof();
      this.drawChimney();
      this.drawBody();
      this.drawEntrance();
      this.drawAFramePeaks();
    },
    drawUpperRoof: function () {
      var roofWidth = this.x + this.houseWidth - this.chimneyWidth;
      var roofOverhangWidth = this.houseWidth * .05;
      var roofY = this.y - this.roofHeight;

      fill(this.roofColor);
      quad(this.x, roofY, roofWidth, roofY, roofWidth, this.y, this.x-roofOverhangWidth, this.y); // upper roof section
    },
    drawChimney: function () {
      var chimneyX = this.x + this.houseWidth - this.chimneyWidth;
      var chimneyY = this.y - this.chimneyHeight;

      fill(this.brickColor);
      rect(chimneyX, chimneyY, this.chimneyWidth, this.chimneyHeight); // chimney
    },
    drawBody: function () {
      fill(this.brickColor);
      rect(this.x, this.y, this.houseWidth, this.houseHeight); // main body of house
    },
    drawEntrance: function () {
      fill(this.entranceColor);
      rect(125,450, 150,140); // front-door porch area

      fill(this.doorColor);
      rect(160,460, 80,130); // front-door

      fill('000');
      ellipse(230,550, 10,10); // door knob
    },
    drawAFramePeaks: function () {
      fill('#ADA98C');
      var x1 = 270;
      var x2 = 500;
      var x3 = 730;
      triangle(x1,400, x2,50, x3,400); // main roof-peak

      x1 = this.x;
      x3 = (this.houseWidth  / 3) + x1;
      x2 = x3 - x1;
      triangle(x1,450, x2,300, x3,450); // door roof-peak
    }
  };

  house.draw();



  // main windows--lower section
  fill('#362B08');
  rect(325,400, 100,150); // front-windows (1 of 3)
  rect(450,400, 100,150); // front-windows (2 of 3)
  rect(575,400, 100,150); // front-windows (3 of 3)

  fill('#2E2E2E');
  rect(325,550, 350,10); // bottom rail of windows

  // window panes for first window
  fill('#FFFAAE');
  rect(335,405, 20,40);
  rect(365,405, 20,40);
  rect(395,405, 20,40);

  rect(335,455, 20,40);
  rect(365,455, 20,40);
  rect(395,455, 20,40);

  rect(335,505, 20,40);
  rect(365,505, 20,40);
  rect(395,505, 20,40);

  //window panes for second window
  rect(460,405, 20,40);
  rect(490,405, 20,40);
  rect(520,405, 20,40);

  rect(460,455, 20,40);
  rect(490,455, 20,40);
  rect(520,455, 20,40);

  rect(460,505, 20,40);
  rect(490,505, 20,40);
  rect(520,505, 20,40);

  //window panes for third window
  rect(585,405, 20,40);
  rect(615,405, 20,40);
  rect(645,405, 20,40);

  rect(585,455, 20,40);
  rect(615,455, 20,40);
  rect(645,455, 20,40);

  rect(585,505, 20,40);
  rect(615,505, 20,40);
  rect(645,505, 20,40);

  //  window above door roof-peak
  fill('#FFFAAE');
  rect(125,250, 150,38);
  fill('#2E2E2E');
  rect(195,250, 10,38);

  // window above main roof-peak
  fill('#FFFAAE');
  rect(410,275, 180,80);
  fill('#2E2E2E');
  rect(465,275, 10,80);
  rect(525,275, 10,80);
};
