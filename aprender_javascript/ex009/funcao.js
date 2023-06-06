// Primeira função

function nomeFuncao() {
    alert("Login ou senha incorreta");
}

// Segunda função

function calcular (a,b){
    var soma = a+b;
    alert("O somatório é: " + soma);
}

// Terceira função

function desconto (a,b){
    var totalDesconto = a - b;
    return totalDesconto;
}
// Chamar a função dentro do javascript
var resultTotalDesconto = desconto(20, 15);
document.write("O valor final com desconto é: " + resultTotalDesconto);

document.write("<br><br><br>");


// Função calcular áerea terreno

function calcularAreaTerreno (c,l){
   var area = c * l;
   return area;
}

var medidasTerreno = calcularAreaTerreno (20,20);
document.write(" A áerea do terreno é: " + medidasTerreno + " m^2");









document.write("<br><br><hr>");

function calculoMultiplicacao (n1,n2){
   multiplicacao = n1 * n2;
   return multiplicacao;
}

var resultadoCalculo = calculoMultiplicacao (20,20);
document.write("O resultado da multiplicação é : " + resultadoCalculo);