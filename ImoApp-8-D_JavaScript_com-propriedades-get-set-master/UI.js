



function mybutton() {
		//imoApp.imóveis.popular("Lisboa", ".lista");
		let valorUI=document.getElementById("fname").value;
		popular(valorUI, ".lista");
	}

function popular(cidade, id) {
	let lista=imoApp.imóveis.procurarEm2(cidade);
	//let ul = document.querySelector(".lista");
	let ul = document.querySelector(id);
	for (const cur of lista)	{
		var listItem = document.createElement("li");
		listItem.textContent = cur.desc();
		ul.appendChild(listItem);
	}
}