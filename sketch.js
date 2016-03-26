var setup = function setup() {
  createCanvas(1200, 1200);
  background('#B2D6FB');

  var house = {
    x: 0,
    y: 0,
    houseWidth: 600,
    houseHeight: 350,
    roofHeight: 140,
    chimneyHeight: 190,
    chimneyWidth: 50,
    brickColor: color('#441209'),
    roofColor: color('#2B2820'),
    entranceColor: color('#F5F3E2'),
    doorColor: color('#362B08'),
    windowDivider: 0,

    draw: function (x, y, sizeFactor) {
      this.houseWidth *= sizeFactor;
      this.houseHeight *= sizeFactor;
      this.roofHeight *= sizeFactor;
      this.chimneyHeight *= sizeFactor;
      this.chimneyWidth *= sizeFactor;

      this.x = x;
      this.y = y;
      this.windowDivider = this.houseWidth * .012;

      this.drawUpperRoof();
      this.drawChimney();
      this.drawBody();
      this.drawEntrance();
      this.drawWindows();
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
      var peakY = this.y + this.houseHeight / 6;
      var baseY = peakY + this.houseHeight * .429;
      var xLeft = this.x;
      var xRight = (this.houseWidth  / 3) + xLeft;
      var xMiddle = xLeft + (xRight - xLeft) / 2;

      // door roof-peak
      fill('#ADA98C');
      triangle(xLeft, baseY, xMiddle, peakY, xRight, baseY);

      // front-door porch area
      var entranceWidth = (xRight - xLeft) * .80;
      xLeft = xMiddle - (entranceWidth / 2);
      var entranceHeight = (this.y + this.houseHeight) - baseY;
      fill(this.entranceColor);
      rect(xLeft, baseY, entranceWidth, entranceHeight);

      //  window above door roof-peak
      var windowHeight = this.houseHeight * .11;
      var windowY = this.y + ((peakY - this.y) - windowHeight) / 2;

      fill('#FFFAAE');
      rect(xLeft, windowY, entranceWidth, windowHeight);
      fill('#2E2E2E');
      rect(xLeft + (entranceWidth / 2) - this.windowDivider / 2, windowY, this.windowDivider, windowHeight);

      // front-door
      var doorWidth = entranceWidth * .6;
      xLeft = xMiddle - (doorWidth / 2);
      var doorHeight = (entranceHeight * .9);
      baseY = (this.y + this.houseHeight) - doorHeight;
      fill(this.doorColor);
      rect(xLeft,baseY, doorWidth,doorHeight);

      // door knob
      var handleSize = doorWidth * .1;
      baseY = baseY + (doorHeight / 2)
      xLeft = xLeft + doorWidth - handleSize;
      fill('000');
      ellipse(xLeft,baseY, handleSize,handleSize);
    },

    drawWindows: function () {
      // main windows--lower section
      var fillFactor = this.houseWidth * .04;
      var windowWidth = this.houseWidth * .17;
      var windowHeight = this.houseHeight * .43;
      var xFirstWindow = this.x + fillFactor + this.houseWidth / 3;
      var xSecondWindow = xFirstWindow + fillFactor + windowWidth;
      var xThirdWindow = xSecondWindow + fillFactor + windowWidth;

      var peakY = this.y - this.chimneyHeight;
      var baseY = (this.y + this.houseHeight) * .68;
      var peakOverhangWidth = this.houseWidth * .05;
      var x3 = this.x + this.houseWidth + peakOverhangWidth;
      var extensionFromWindowWidth = x3 - xThirdWindow - windowWidth;
      var x1 = xFirstWindow - extensionFromWindowWidth;
      var x2 = xSecondWindow + (windowWidth / 2);

      baseY = peakY + this.houseHeight;

      fill('#ADA98C');
      triangle(x1, baseY, x2, peakY, x3, baseY); // main roof-peak

      fill('#362B08');
      rect(xFirstWindow, baseY, windowWidth, windowHeight); // front-windows (1 of 3)
      this.installWindowsPanes(xFirstWindow, baseY, windowWidth, windowHeight);

      fill('#362B08');
      rect(xSecondWindow, baseY, windowWidth, windowHeight); // front-windows (2 of 3)
      this.installWindowsPanes(xSecondWindow, baseY, windowWidth, windowHeight);

      fill('#362B08');
      rect(xThirdWindow, baseY, windowWidth, windowHeight); // front-windows (3 of 3)
      this.installWindowsPanes(xThirdWindow, baseY, windowWidth, windowHeight);

      var railLength = (windowWidth * 3) + (fillFactor * 2);
      fill('#2E2E2E');
      rect(xFirstWindow, baseY + windowHeight, railLength, fillFactor * .5); // bottom rail of windows

      // window above main roof-peak
      var upperWindowWidth = railLength * .60;
      var upperWindowHeight = this.houseHeight * .23;
      var upperWindowX = x2 - upperWindowWidth / 2;
      var upperWindowY = this.y + ((baseY - this.y) - upperWindowHeight) / 2;

      fill('#FFFAAE');
      rect(upperWindowX, upperWindowY, upperWindowWidth, upperWindowHeight);
      fill('#2E2E2E');
      rect(upperWindowX + (upperWindowWidth / 3) - this.windowDivider / 2, upperWindowY, this.windowDivider, upperWindowHeight);
      rect(upperWindowX + (upperWindowWidth / 3) * 2 + this.windowDivider / 2 , upperWindowY, this.windowDivider, upperWindowHeight);
    },

    installWindowsPanes: function(windowX, baseY, windowWidth, windowHeight) {
      var fillFactorX = windowWidth * .08;
      var panelWidth = (windowWidth - fillFactorX * 4) / 3;

      var fillFactorY = 5;
      var panelHeight = (windowHeight - fillFactorY * 4) / 3;

      var x = windowX + fillFactorX;
      var y = baseY + fillFactorY;

      fill('#FFFAAE');
      for (var row = 0; row < 3; row ++) {
        for (var col = 0; col < 3; col ++) {
          rect(x, y, panelWidth, panelHeight);
          y += panelHeight + fillFactorY;
        }
        x += panelWidth + fillFactorX;
        y = baseY + fillFactorY;
      }
    }
  };

  house.draw(125, 250, .8);
};
