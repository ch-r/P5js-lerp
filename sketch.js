
var cellSize = 20;
var grid = [];
var xOffset = 1.5;
var yOffset = 1.732;
let sidecount = 6;
var h,s,l;


function setup () {
    createCanvas(windowWidth, windowHeight);
    var cols = width/cellSize;
    var rows = height/cellSize;
    colorMode(HSL,360);
    let t = frameCount;


  
    for(j = -1; j < rows; j++) {
        for(i = -1; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw () {
    background(0, 0, 0 );
    let t= frameCount;
    sinFactor = map(sin(t/80), -1, 1, 0, 360)/width;
    cosFactor = map(cos(t/50), -1, 1, 0, 360)/height;

  for(var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;
  
    if(i % 2 === 0) {
        this.y = this.j * cellSize * yOffset ;
    } else {
        this.y = this.j * cellSize *  yOffset + cellSize* yOffset/2 ;
    }
    this.x = this.i * cellSize * xOffset ;
  
  
    this.hasPlayer = false;
    this.show = function () {
        push(); 
        var dx = this.x;
        var dy = this.y;
        polygon(dx, dy, cellSize, sidecount);
        pop();
    }
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
  
  //styling
    fill(x*0.5, y*0.5, (x+y)*0.25);
    noStroke();
    
    push();
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
}  