class ImoApp {

	constructor() {
		this.imóveis = [];
		this.clientes = new Map();
		this.terceiros = []; // business event listeners
		this.encontrados; // resultados de procuras
	}

	simular() {
		var clientes = [
			new Cliente("António Tugerres", "to.tugerres@un.org"),
			new Cliente("José Sacrista", "tozesa@prisão.pt"),
			new Cliente("Bruno de Alcocho", "bruno.queimado@alcochete.pt"),
			new Cliente("Ricardo Soldado", "bem.salgado@bahamas.island")
		];
		clientes[0].alocar("Main Street", 258, 15250, 560, "USA");
		clientes[1].alocar("Alameda dos Oceanos", 123, 1600, 360, "Portugal");
		for (let cliente of clientes)
			this.inscrever(cliente);
		var imóveis = [
			new Imóvel("Lisboa", 38.705387, -9.160616, 125000),
			new Imóvel("Lisboa", 38.705762, -9.161155, 85000),
			new Imóvel("Lisboa", 38.704806, -9.165048, 330000),
			new Imóvel("Porto", 41.155945, -8.629679, 490000),
			new Imóvel("Porto", 41.160283, -8.628531, 1690000),
			new Imóvel("Porto", 41.157779, -8.622000, 68000)
		];
		for (var i = 0; i < imóveis.length; i++)
			this.gerir(imóveis[i]);
		return this; // permite chaining
	}

	inscrever(cliente) {
		this.clientes.set(cliente.email, cliente);
	}

	gerir(imóvel) {
		this.imóveis.push(imóvel);
	}

	procurar(comparar) { // comparar deve ser uma function que devolve um boolean
		this.encontrados = [];
		for (var imóvel, i = 0; i < this.imóveis.length; i++) {
			imóvel = this.imóveis[i];
			if (comparar(imóvel))
				this.encontrados.push(imóvel);
		}
		for (var i = 0; i < this.terceiros.length; i++)
			this.terceiros[i].avisar(new Evento(Evento.IMÓVEIS_ENCONTRADOS, this.encontrados));
	}

	registar(terceiro) { // preferi registo de objetos em vez de registo de funções)
		this.terceiros.push(terceiro);
	}

}


