
var horizon;
var obstacleSpeed;

var score;
var obstacles = [];

var dino;

function setup() {

  createCanvas(1000, 500);

  textAlign(CENTER);

  horizon = height - 40;

	score = 0;
	obstacleSpeed = 6;

	var size = 20;
	dino = new TRex(size * 2, height - horizon, size);

  textSize(20);
}

function draw() {
  background(51);

	drawHUD();

	handleLevel(frameCount);

	dino.update(horizon);

  handleObstacles();
}

/**
	*dibuja horizonte y puntuación
	*/
function drawHUD() {

  /* dibujar horizonte*/
  stroke(255);
	strokeWeight(2);
  line(0, horizon, width, horizon);

	/* 	dibujar puntuación */
	noStroke();
  text("Score: " + score, width / 2, 30);

	/* dibujar T-Rex */
	dino.draw();
}

/**
	*	actualiza, dibuja y limpia los obstáculos*/
function handleObstacles() {

  for (var i = obstacles.length - 1; i >= 0; i--) {

		obstacles[i].update(obstacleSpeed);
		obstacles[i].draw();

		if (obstacles[i].hits(dino)) // si hay una colisión
			endGame();

    if (!obstacles[i].onScreen) // si ya no se muestra
      obstacles.splice(i, 1); // eliminar de la matriz
  }
}


/**
	* acelera el juego, empuja nuevos obstáculos y maneja la puntuación
	*/
function handleLevel(n) {

  if (n % 30 === 0) { // cada 0,5 segundos

    var n = noise(n); // noisey

    if (n > 0.5)
      newObstacle(n); // empujar un nuevo obstáculo

	  if (n % 120 === 0) // cada 2 segundos
	    obstacleSpeed *= 1.05; // acelerar
  }

	score++;
}

/**
	* empuja un obstáculo aleatorio*/
function newObstacle(n) {

	var col = color(random(255), random(255), random(255));
	var size = random(30) + 20;
  var obs = new Obstacle(width + size, size, horizon, col);

  obstacles.push(obs);
}

function keyPressed() {

	if ((keyCode === UP_ARROW || keyCode === 32) && dino.onGround) // saltar si es posible
		dino.jump();
}

function endGame() {

	noLoop();
  noStroke();
  textSize(40);
  text("GAME OVER", width / 2, height / 2);
  textSize(20);
  text("Press f5 to restart", width / 2, height / 2 + 20);
}
