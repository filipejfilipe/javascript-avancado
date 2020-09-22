/*
function Cliente(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, nome, email, telemóvel) {

	this.rua = rua;
	this.número = número;
	this.cidade = cidade;
	this.códigoPostalPrincipal = códigoPostalPrincipal;
	this.códigoPostalsecundário = códigoPostalsecundário;
	this.nome = nome;
	this.email = email;
	this.telemóvel = telemóvel;

}
*/


class Cliente {

	constructor(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, nome, email, telemóvel) {
		this.morada = new Morada(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário);
		/*this.rua = rua;
		this.número = número;
		this.cidade = cidade;
		this.códigoPostalPrincipal = códigoPostalPrincipal;
		this.códigoPostalsecundário = códigoPostalsecundário;
		*/
		this.nome = nome;
		this.email = email;
		this.telemóvel = telemóvel;		
	}
}