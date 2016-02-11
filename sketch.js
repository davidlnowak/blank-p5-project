var setup = function setup() {
  createCanvas(800, 600);
  background('#B2D6FB');

  // upper roof
  fill('#2B2820');
  quad(100,100, 650,100, 650,240, 60,240); // upper roof sectiond
  fill('#441209');
  rect(650,50, 50,190); // chimney
  fill('000')

  // house--lower section
  fill('#441209');
  rect(100,240, 600,350); // main body of house
  fill('#F5F3E2');
  rect(125,450, 150,140); // front-door porch area

  fill('#362B08');
  rect(160,460, 80,130); // front-door
  fill('000');
  ellipse(230,550, 10,10); // door knob

  // a-frame peaks
  fill('#ADA98C');
  triangle(270,400, 500,50, 730,400); // main roof-peak
  triangle(100,450, 200,300, 300,450); // door roof-peak
  fill('000');

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
