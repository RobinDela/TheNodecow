const infoCampus = require('./information.js');
console.log(infoCampus)

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${infoCampus.nom}, I study at ${infoCampus.campus} campus`,
	e : "oO",
	T : "U "
}));

