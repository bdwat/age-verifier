function checar() {
	let data = new Date();
	let thisYear = data.getFullYear();
	let fAno = document.querySelector("#txtage");
	let res = document.querySelector(".res");
	if (fAno.value.length == 0 || fAno.value > thisYear) {
		alert("Verifique os dados e tente novamente");
	} else {
		let fSex = document.getElementsByName("radsex");
		let idade = thisYear - Number(fAno.value);
		let gen = "";
		let img = document.createElement("img");
		img.setAttribute("id", "foto");

		if (fSex[0].checked) {
			gen = "Homem";
			if (idade >= 0 && idade <= 10) {
				img.setAttribute("src", "./Images/foto-bebe-m.png");
			} else if (idade < 18) {
				img.setAttribute("src", "./Images/foto-jovem-m.png");
			} else if (idade < 60) {
				img.setAttribute("src", "./Images/foto-adulto-m.png");
			} else {
				img.setAttribute("src", "./Images/foto-idoso-m.png");
			}
		} else {
			gen = " Mulher";
			if (idade >= 0 && idade <= 10) {
				img.setAttribute("src", "./Images/foto-bebe-f.png");
			} else if (idade < 18) {
				img.setAttribute("src", "./Images/foto-jovem-f.png");
			} else if (idade < 60) {
				img.setAttribute("src", "./Images/foto-adulto-f.png");
			} else {
				img.setAttribute("src", "./Images/foto-idoso-f.png");
			}
		}
		res.style.textAlign = "center";
		res.innerText = `Você tem ${idade} anos e é um(a) ${gen}`;
		res.appendChild(img);
	}
}
