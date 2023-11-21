var canvas = document.getElementById("khumariCancas");
var ctx = canvas.getContext("2d");

// Draw black circle
ctx.beginPath();
ctx.arc(100, 100, 100, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

// Draw black circles
ctx.beginPath();
ctx.arc(50, 25, 20, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.beginPath();
ctx.arc(150, 25, 20, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

// Draw white circles
ctx.beginPath();
ctx.arc(75, 75, 10, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath();
ctx.arc(125, 75, 10, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

// Draw pink triangle
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(90, 110);
ctx.lineTo(110, 110);
ctx.fillStyle = "pink";
ctx.fill();

// Draw white lines
ctx.beginPath();
ctx.moveTo(90, 110);
ctx.lineTo(110, 110);
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(70, 115);
ctx.lineTo(100, 110);
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(70, 105);
ctx.lineTo(100, 110);
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(130, 105);
ctx.lineTo(100, 110);
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(130, 115);
ctx.lineTo(100, 110);
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();

// Draw black ellipse
ctx.beginPath();
ctx.ellipse(175, 150, 80, 20, 0, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

// Draw white curve
ctx.beginPath();
ctx.moveTo(80, 140);
ctx.quadraticCurveTo(100, 160, 130, 140);
ctx.strokeStyle = "white"
ctx.lineWidth = 2;
ctx.stroke();




//Drawing a circle(Smiley black cat) with SVG:

/*
dth="300" height="300">
  <circle cx="100" cy="100" r="100" fill="black" />
  <circle cx="50" cy="25" r="20" fill="black" />
  <circle cx="150" cy="25" r="20" fill="black" />
  <circle cx="75" cy="75" r="10" fill="white" />
  <circle cx="125" cy="75" r="10" fill="white" />
  <polygon points="100,100 90,110 110,110" fill="pink" />
  <line x1="90" y1="110" x2="110" y2="110" stroke="white" stroke-width="2" />
  <line x1="70" y1="115" x2="100" y2="110" stroke="white" stroke-width="2" />
  <line x1="70" y1="105" x2="100" y2="110" stroke="white" stroke-width="2" />
  <line x1="130" y1="105" x2="100" y2="110" stroke="white" stroke-width="2" />
  <line x1="130" y1="115" x2="100" y2="110" stroke="white" stroke-width="2" />
  <ellipse cx="175" cy="150" rx="80" ry="20" fill="black" />
  <path d="M 80 140 Q 100 160 130 140" stroke="white" stroke-width="2" fill="none" />
</svg>
*/