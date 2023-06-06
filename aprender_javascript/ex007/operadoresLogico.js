var nota = 11; 
var faltas = 32;

if((nota < 10 )|| (faltas < 30)){

    document.write(" Aluno Aprovado " + nota + " Núemros de faltas " +faltas);
} else {
    document.write(" Aluno Reprovado " + nota + " Números de faltas " + faltas );
}

document.write("<br> <hr>");

 nota = 11; 
 faltas = 25;

if((nota > 10 ) && (faltas > 30)){

    document.write(" Aluno Aprovado " + nota + " Núemros de faltas " + faltas);
} else {
    document.write(" Aluno Reprovado " + nota + " Números de faltas " + faltas );
}

document.write("<br> <hr>");

var situacao = !true;

document.write("Situação " + situacao + "<br>");