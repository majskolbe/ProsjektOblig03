//this way of writing out the figures corresponds to the put-image function in pyret

//drawing in canvas
//draving circles and with different parameters
circle(100, "solid", "yellow", 100, 100)
circle(20, "solid", "black", 140, 70)
circle(20, "solid", "black", 60, 70)

rectangle(10, 120, 40, 130, "solid", "black")
rectangle(20, 150, 20, 45, "solid", "yellow")


//drawing in svg
//drawing rectangles and circles in different sizes and possision. 

circleSvg("100", "100", "100", "fill:yellow", "svg");
circleSvg("60", "70", "20", "fill:black", "svg");
circleSvg("140", "70", "20", "fill:black", "svg");

rectangleSvg("40", "130", "130", "10", "fill:black", "svg");
rectangleSvg("30", "45", "140", "20", "fill:yellow", "svg");

