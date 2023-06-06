// Array em Javascript

var frutas = ["Abacate", "Abacaxi", "Amora", "Açai", "Cereja", "Figo"];
// contar a  quantidade de item no Array.

console.log("A quantidade de frutas são: " + frutas.length);
//Como selecionar os elementos de um array
console.log("O primeiro elemento do array: " + frutas[0]);
console.log("O segundo elemento do array: " + frutas[1]);
console.log("O terceiro elemento do array: " + frutas[2]);
console.log("O quarto elemento do array: " + frutas[3]);
console.log("O quinto elemento do array: " + frutas[4]);
console.log("O sexto elemento do array: " + frutas[5]);

// Acessar o útimo item do array
console.log("O último elemento do array é: " + frutas[frutas.length-1]);

//Adicinar elemento ao Array
frutas.push("Mação");

//Adicionar mais um item ao inicio do array
frutas.unshift("kiwi");

//Remover item no final do array
frutas.pop();

//Remover o primeiro item do array
frutas.shift();

//Remover item pela sua posição
frutas.splice(2,1);

//Ler o array completo incluindo 
frutas.forEach(function(item, indice, array){

    console.log(item,indice);
});


var carros = ["Voyage", "Virtus", "Jetta", "A1", "A2", "A3"];

console.log("O array possui " + carros.length + " quantidades de carros ");

carros.forEach(function(item, indice, array){

    console.log(item,indice);
});