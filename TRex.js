function TRex(x, y, radius) {

	this.x = x;
	this.y = y;

	this.yVelocity = 0;
	this.speed = 1;
	this.onGround = true;

	this.radius = radius; // size of circle
}

/**
	*	handle y values
	*/
TRex.prototype.update = function(platform) {

	var bottom = this.y + this.radius; // bottom pixel of circle
	var nextBottom = bottom + this.yVelocity; // calcular la parte inferior del siguiente cuadro

  if (bottom <= platform && nextBottom >= platform) { // el próximo fotograma estará en la plataforma

		this.yVelocity = 0; // restablecer la velocidad
		this.y = platform - this.radius; // don't go past platform
		this.onGround = true;
  } else if (platform - bottom > 1) { // no pases de la plataforma

		this.yVelocity += this.speed; // aumentar la velocidad

		this.onGround = false;
  }

	/* movimiento */
	this.y += this.yVelocity;
};

/**
	* haz que el dinosaurio salte*/
TRex.prototype.jump = function() {

	this.yVelocity = -(this.radius * 0.7); // saltar
};

TRex.prototype.draw = function() {

  fill('#999999');
	stroke(255);
	strokeWeight(1);
  ellipse(this.x, this.y, this.radius * 1.2);
};
