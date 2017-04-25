var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	alert('Wynik zgodny');
	console.log('Wynik zgodny');
		var x = allNames.push(newName);
		console.log(allNames);
} else if (allNames.indexOf(newName) > -1) {
	alert('Wynik błędny');
	console.log('Wynik błędny');
}