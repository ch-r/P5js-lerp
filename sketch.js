
var cellSize = 10;
var grid = [];
var xOffset = 0;
var yOffset = 0;
let sidecount = 6;


function setup () {
    createCanvas(windowWidth, windowHeight);
    var cols = width/cellSize;
    var rows = height/cellSize;
    colorMode(HSL,360);

    

    for(j = -1; j < rows; j++) {
        for(i = -1; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw () {
    background(0, 0, 0 );

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
        // stroke(red, green, blue, 50);
        noStroke();
        fill(360/(width/cellSize)*i, 360/(height/cellSize)*j, 255);
 
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