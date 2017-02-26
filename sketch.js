var colorList = ['#9fe0ae', '#73c486', '#54a367', '#377a46'];
var colorList2 = ['#cc92dd', '#a063b2', '#844b96', '#612a72'];


function setup() {

  createCanvas(800, 600);
  frameRate(3);
}

function draw() {
  for (var x = 0; x < 900; x += 10) {
    for (var y = 0; y < 700; y += 20) {
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      noStroke();
      if (mouseX > 200 && mouseY < 300) {
        var colorHex = colorList2[index];
        fill(color(colorHex));
      }
      if (mouseX > 300 && mouseY < 400) {
        ellipse(x, y, 100, 50);
      }
      beginShape();
      vertex(x, y);
      vertex(x, y + 100);
      vertex(x + 30, y + 20);
      vertex(x + 10, y + 10);
      endShape(CLOSE);
    }
  }
}