
var cellSize = 20;
var grid = [];
var xOffset = 0;
var yOffset = 0;
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
    h = map(winMouseX, 0, width, 0, 1);
    s = map(mouseY, 0, height, 0, 1);
    l = map(mouseX, 0, width, 0, 1);
    for(var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;

    if(j % 2 === 0) {
        this.x = this.i * cellSize * 1.6 ;
    } else {
        this.x = this.i * cellSize * 1.6  + cellSize *0.8;
    }
    
    this.y = this.j * cellSize * 1.4 ;
    this.hasPlayer = false;
    this.show = function () {
        fill(50, 50, 50); 
        push(); 
        translate(this.x, this.y);
        rotate(radians(30));
        polygon(0, 0, cellSize, sidecount);
        pop();
    }
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}  