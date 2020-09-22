/*
function Imóvel(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, valor) {

	this.rua = rua;
	this.número = número;
	this.cidade = cidade;
	this.códigoPostalPrincipal = códigoPostalPrincipal;			// alteracao!!!!
	this.códigoPostalsecundário = códigoPostalsecundário;		// alteracao2
	this.valor = valor;
	this.cor = "azul";			// alteracao 3
}
*/


class Imóvel {
	constructor(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, valor, cor="azul"){
		this.morada = new Morada(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário);
		/*this.rua = rua;
		this.número = número;
		this.cidade = cidade;
		this.códigoPostalPrincipal = códigoPostalPrincipal;			
		this.códigoPostalsecundário = códigoPostalsecundário;		*/
		this.valor = valor;
		this.cor = cor;							
	}

}