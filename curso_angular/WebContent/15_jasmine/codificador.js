function codificador(distancia) {
	this.distancia = distancia;
	this.caracteres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
	this.numCaracteres = this.caracteres.length;
}

codificador.prototype.encode = function(texto) {
	return this.codificacion(texto, this.caracterAnterior);
}

codificador.prototype.decode = function(texto) {
	return this.codificacion(texto, this.caracterPosterior);
}

codificador.prototype.caracterAnterior = function(i) {
	offset = i + this.distancia;
	if (offset >= this.numCaracteres)
		offset -= this.numCaracteres;
	return this.caracteres[offset];
}

codificador.prototype.caracterPosterior = function(i) {
	offset = i - this.distancia;
	if (offset < 0)
		offset += this.numCaracteres;
	return this.caracteres[offset];
}

codificador.prototype.codificacion = function(origen, caracter) {
	auxTexto = "";
	for (charIndex=0; charIndex < origen.length; charIndex++) {
		siguiente = origen.charAt(charIndex);
		i = this.caracteres.indexOf(siguiente.toUpperCase());
		if (i > -1)
			siguiente = caracter.call(this,i);
		auxTexto += siguiente;
	}
	
	return auxTexto;
}