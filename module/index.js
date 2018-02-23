"use strict";

const tableau = require("./tab.js");

/*console.log(tableau.tableau.tabPrenom);
console.log(tableau.tableau.tabNom);*/


const maxPrenom = tableau.tableau.tabPrenom.length;
const maxNom = tableau.tableau.tabNom.length;
const maxNum = tableau.tableau.tabNum.length;
const maxIndi = tableau.tableau.tabIdiRegion.length;
const maxCourriel = tableau.tableau.tabCourriel.length;

const Peupler = () => {
	let position = Math.floor(Math.random()*maxPrenom)
	let prenom = tableau.tableau.tabPrenom[position];
	
	let position2 = Math.floor(Math.random()*maxNom)
	let nom = tableau.tableau.tabNom[position2];
	

	let position3 = Math.floor(Math.random()*maxNum)
	let num = tableau.tableau.tabNum[position3];

	
	let position4 = Math.floor(Math.random()*maxIndi)
	let Indi = tableau.tableau.tabIdiRegion[position4];


	let numero =  Indi+ " "+num;

	let position6 = Math.floor(Math.random()*maxCourriel)
	let courriel =  prenom+ "."+nom + tableau.tableau.tabCourriel[position6];

	return {
		nom: nom,
		prenom:prenom,
		numero:numero,
		courriel:courriel
	}
}

module.exports = Peupler;