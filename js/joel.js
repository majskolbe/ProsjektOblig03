//this way of writing out the figures corresponds to the put-image function in pyret

//drawing rectangles and circles in different sizes and possision. 

circleSvg("100", "100", "100", "fill:white", "joelSvg");
circleSvg("140", "70", "20", "fill:blue", "joelSvg");
circleSvg("60", "70", "20", "fill:blue", "joelSvg");
circleSvg("100", "110", "20", "fill:red", "joelSvg");
OvalSvg("100", "160", "50", "20", "0", "fill:red", "joelSvg");


 //draving circles with different parameters
 circle(100, "solid", "white", 100, 100, "joelCanvas")
 circle(20, "solid", "blue", 140, 70, "joelCanvas")
 circle(20, "solid", "blue", 60, 70, "joelCanvas")
 circle(20, "solid", "red", 100, 110, "joelCanvas")


 //drawing mouth with canvas
 Oval(100, 160, 50, 20, 0, 0, Math.PI * 2, "solid", "red", "joelCanvas");