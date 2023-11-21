//this way of writing out the figures corresponds to the put-image function in pyret
//drawing in svg
//drawing rectangles and circles in different sizes and possision. 

circleSvg("100", "100", "100", "fill:yellow", "majaSvg");
circleSvg("60", "70", "20", "fill:black", "majaSvg");
circleSvg("140", "70", "20", "fill:black", "majaSvg");

rectangleSvg("40", "130", "130", "10", "fill:black", "majaSvg");
rectangleSvg("30", "45", "140", "20", "fill:yellow", "majaSvg");


//drawing in canvas
//draving circles and with different parameters
circle(100, "solid", "yellow", 100, 100, "majaCanvas")
circle(20, "solid", "black", 140, 70, "majaCanvas")
circle(20, "solid", "black", 60, 70, "majaCanvas")

rectangle(10, 120, 40, 130, "solid", "black", "majaCanvas")
rectangle(20, 150, 20, 45, "solid", "yellow", "majaCanvas")


