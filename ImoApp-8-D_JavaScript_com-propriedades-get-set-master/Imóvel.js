
function Imóvel(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, valor) {

	//this.endereço = new Endereço(rua, número, cidade, new CódigoPostal(códigoPostalPrincipal, códigoPostalsecundário));
	var freguesia = Freguesias.identificar(códigoPostalPrincipal, códigoPostalsecundário);
	this.freguesia = freguesia;
	this.endereço = new Endereço(rua, número, cidade, freguesia);
	this.valor = valor;

}

Imóvel.prototype.em = function (cidade) {
	return this.endereço.cidade === cidade;
};

Imóvel.prototype.desc = function () {

	return "Cidade:" + this.endereço.cidade + ", Rua:" + this.endereço.rua + ", Valor=" + this.valor;
};