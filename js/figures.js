
//defining some constants for canvas
const drw = document.getElementById("canvas").getContext("2d");


//function for drawing a circle with canvas
circle = function(radius, mode, color, x, y) {
  drw.fillStyle = color;
  drw.beginPath();
  drw.arc(x, y, radius, 0, Math.PI * 2, true); // Outer circle
  if (mode == "solid") {
    drw.fill();
  } else {
    drw.stroke();
  }
}

//function for drawing rectangles
rectangle = function(height, width, x, y, mode, color) {
    drw.fillStyle = color, mode;
    drw.fillRect(x, y, width, height);
  }

//this way of writing out the figures corresponds to the put-image function in pyret

//draving circles and with different parameters
circle(100, "solid", "yellow", 100, 100)
circle(20, "solid", "black", 140, 70)
circle(20, "solid", "black", 60, 70)

rectangle(10, 120, 40, 130, "solid", "black")
rectangle(20, 150, 20, 45, "solid", "yellow")





//Drawing with SVG

//Function for rectanlge
const svg = document.getElementById("svg");

function rectangleSvg(x, y, width, height, style, id) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("style", style);
    
    document.getElementById(id).appendChild(rect);


}

//Function for circle
function circleSvg(x, y, r, style, id){
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("style", style);

    document.getElementById(id).appendChild(circle);

}

//this way of writing out the figures corresponds to the put-image function in pyret

//drawing rectangles and circles in different sizes and possision. 

circleSvg("100", "100", "100", "fill:yellow", "svg");
circleSvg("60", "70", "20", "fill:black", "svg");
circleSvg("140", "70", "20", "fill:black", "svg");

rectangleSvg("40", "130", "130", "10", "fill:black", "svg");
rectangleSvg("30", "45", "140", "20", "fill:yellow", "svg");





