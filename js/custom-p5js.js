function preload() {
	/* preload all assets here */
}

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight - 5, WEBGL);

	/* use orthographic view */
	ortho(-width, width, height, -height/2, 0.1, 100);

	/* insert canvas inside #canvasWrap */
	myCanvas.parent('canvasWrap');
}

function draw() {

	/* 3D WebGL */
	background(255);

	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	torus(200, 60);


	/* 2d circles */
	/*if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 80, 80);*/
}