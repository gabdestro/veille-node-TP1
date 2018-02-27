

let btnModifier = document.getElementsByClassName("modif");




for(i=0;i<3;i++){
	
	btnModifier[i].addEventListener("click", function(evt){
		let idMod = evt.target.parentElement.parentElement.getElementsByClassName("_id")[0].innerHTML;
		let nomMod = evt.target.parentElement.parentElement.getElementsByClassName("nom")[0].innerHTML;
		let prenomMod = evt.target.parentElement.parentElement.getElementsByClassName("prenom")[0].innerHTML;
		let telMod = evt.target.parentElement.parentElement.getElementsByClassName("numero")[0].innerHTML;
		let courrielMod = evt.target.parentElement.parentElement.getElementsByClassName("courriel")[0].innerHTML;
	
	let formInv =  document.getElementById("formInvisible");
	console.log(formInv)
		formInv.getElementsByClassName("_id")[0].value = idMod.trim();
	formInv.getElementsByClassName("nom")[0].value = nomMod.trim();
	formInv.getElementsByClassName("prenom")[0].value = prenomMod.trim();
	formInv.getElementsByClassName("telephone")[0].value = telMod.trim();
	formInv.getElementsByClassName("courriel")[0].value = courrielMod.trim();

	formInv.submit();
	});
}

