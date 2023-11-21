//this way of writing out the figures corresponds to the put-image function in pyret

//drawing rectangles and circles in different sizes and possision. 

circleSvg("100", "200", "100", "fill:white", "joelSvg");
circleSvg("60", "170", "20", "fill:blue", "joelSvg");
circleSvg("140", "170", "20", "fill:blue", "joelSvg");
circleSvg("100", "200", "20", "fill:red", "joelSvg");
oval("100", "250", "50", "20", "fill:red", "joelSvg");



 //draving circles with different parameters
 circle(100, "solid", "white", 100, 200,"joelCanvas")
 circle(20, "solid", "blue", 140, 170,"joelCanvas")
 circle(20, "solid", "blue", 60, 170,"joelCanvas")
 circle(20, "solid", "red", 100, 200,"joelCanvas")


 //drawing mouth with canvas
 smile(100, 250, 50, 20, 400, 0, "solid", "red","joelCanvas");