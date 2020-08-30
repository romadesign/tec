function Obstacle(x, size, horizon, color) {

  this.x = x;
	this.y = horizon - size;

  this.size = size;
  this.color = color;

	this.onScreen = true;
}

/**
	*manejar xy valores en pantalla*/
Obstacle.prototype.update = function(speed) {

	/*comprobar si está fuera de la pantalla */
	this.onScreen = (this.x > -this.size);

	/* movimiento*/
	this.x -= speed;
};

Obstacle.prototype.draw = function() {

	fill(this.color);
	stroke(255);
	strokeWeight(2);
	rect(this.x, this.y, this.size, this.size);
};

/**
	* controles de colisiones
	*/
Obstacle.prototype.hits = function(dino) {

	var halfSize = this.size / 2;
	var minimumDistance = halfSize + (dino.radius); // Más cercana antes de la colisión

	/* encontrar coordenadas del centro */
	var xCenter = this.x + halfSize;
	var yCenter = this.y + halfSize;

	var distance = dist(xCenter, yCenter, dino.x, dino.y); // calcular la distancia desde los centros

	return (distance < minimumDistance); // devolver resultado
};
