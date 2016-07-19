function preload() {
	/* preload all assets here */
}

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight - 5);

	/* insert canvas inside #canvasWrap */
	myCanvas.parent('canvasWrap');
}

function draw() {
	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 80, 80);
}