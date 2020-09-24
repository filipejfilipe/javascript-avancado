
class Imóveis {

	constructor() {
		this.coleção = new Array();
		this.coleção.push(new Imóvel("Rua do Olival", 40, "Lisboa", 1200, 739, 75000));
		this.coleção.push(new Imóvel("Travessa da Azeitona", 75, "Lisboa", 1300, 350, 175000));
		this.coleção.push(new Imóvel("Praça do Calvário", 33, "Porto", 2200, 301, 99000));


		//document.querySelector(".lista__btn").addEventListener('click', this.button);
	}

	procurarEm(cidade) {
		var imóvel;
		var número = this.coleção.length;
		while (número-- !== 0) {
			var imóvel = this.coleção[número];
			if (imóvel.em(cidade))
				break;
		}
		return imóvel;
	}

	procurarEm2(cidade) {
		var imóvel;
		var número = this.coleção.length;
		var lista = new Array();
		while (número-- !== 0) {
			var imóvel = this.coleção[número];
			if (imóvel.em(cidade)) {
				lista.push(imóvel);
			}
				
		}
		return lista;
	}

	// imoApp.imóveis.popular("Lisboa", "")
	popular(cidade, id) {
		let lista=this.procurarEm2(cidade);
		//let ul = document.querySelector(".lista");
		let ul = document.querySelector(id);
		for (const cur of lista)	{
			var listItem = document.createElement("li");
			listItem.textContent = cur.desc();
			ul.appendChild(listItem);
		}
	}

	/*
	button() {
		imoApp.imóveis.popular("Lisboa", "");
	}
	*/

}

