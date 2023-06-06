var valorUm = prompt("Digite o primeiro número");
var valorDois = prompt("Digite o segundo número");

document.write("<h1>Aprender a trabalhar com operadores de comparação</h1>", "<br>");

document.write("<h3>Operador de igualdade</h3>", "<br>");

if (valorUm == valorDois) { 
    document.write(valorUm + " e  " + valorDois + " são iguais "); 
} else {
    document.write(valorUm + " e  " + valorDois + " são diferentes "); 
}

document.write("<hr>");

document.write("<h3>Operador maior</h3>", "<br>");

if (valorUm > valorDois) { 
    document.write(valorUm + " e  " + valorDois + " O primeio número é maior "); 
} else {
    document.write(valorUm + " e  " + valorDois + " são diferentes "); 
}

document.write("<hr>");

document.write("<hr>");

document.write("<h3>Operador menor</h3>", "<br>");

if (valorUm < valorDois) { 
    document.write(valorUm + " e  " + valorDois + " O primeio número é menor "); 
} else {
    document.write(valorUm + " e  " + valorDois + " é menor "); 
}

document.write("<hr>");

document.write("<hr>");

document.write("<h3>Operador de Difença</h3>", "<br>");

if (valorUm != valorDois) { 
    document.write(valorUm + " e  " + valorDois + " são diferentes "); 
} else {
    document.write(valorUm + " e  " + valorDois + " são iguais "); 
}

document.write("<hr>");
