
//defining some constants for canvas

//function for drawing a circle with canvas
circle = function(radius, mode, color, x, y, id) {
    const ctx = document.getElementById(id);
    ctx.getContext("2d").fillStyle = color;
    ctx.getContext("2d").beginPath();
    ctx.getContext("2d").arc(x, y, radius, 0, Math.PI * 2, true); // Outer circle
  if (mode == "solid") {
    ctx.getContext("2d").fill();
  } else {
    ctx.getContext("2d").stroke();
  }
}

//function for drawing rectangles
rectangle = function(height, width, x, y, mode, color, id) {
    const rct = document.getElementById(id);
    rct.getContext("2d").fillStyle = color, mode;
    rct.getContext("2d").fillRect(x, y, width, height);
  }



//Drawing with SVG

//Function for rectanlge
//const svg = document.getElementById(id);

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







