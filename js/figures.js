
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

//function for drawing a smiley mouth


function oval(x, y, radiusX, radiusY, startAngle, endAngle, mode, color, id) {
    const ctx = document.getElementById(id).getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, 0, startAngle, endAngle);
    if (mode === "solid") {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}






//Drawing with SVG

//Function for rectanlge
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

function OvalSvg(x, y, rx, ry, RotationR, style, id){
  var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  ellipse.setAttribute("cx", x);
  ellipse.setAttribute("cy", y);
  ellipse.setAttribute("rx", rx);
  ellipse.setAttribute("ry", ry);

  RotationD = (RotationR * 180) / Math.PI;
  ellipse.setAttribute("transform", `rotate(${RotationD} ${x} ${y})`);
  
  ellipse.setAttribute("style", style);
  document.getElementById(id).appendChild(ellipse);
}



//funksjon for å skrive ut en oval
/*function ovalSvg(x, y, rx, ry, style, id){
    var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse.setAttribute("cx", x);
    ellipse.setAttribute("cy", y);
    ellipse.setAttribute("rx", rx);
    ellipse.setAttribute("ry", ry);
    ellipse.setAttribute("style", style);
  
      document.getElementById(id).appendChild(ellipse);
}
*/

/*function ovalSvg(x, y, rx, ry, RotationR, style, id){
    var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse.setAttribute("cx", x);
    ellipse.setAttribute("cy", y);
    ellipse.setAttribute("rx", rx);
    ellipse.setAttribute("ry", ry);

    RotationD = (RotationR * 180) / Math.PI;
    ellipse.setAttribute("transform", 'rotate(${RotationD} ${x} ${y})');

    ellipse.setAttribute("style", style);
    document.getElementById(id).appendChild(ellipse);
  }
  */
  







