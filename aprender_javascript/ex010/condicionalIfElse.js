// Estrutura  condicional if - else if - else

var nota = 4;

if (nota <= 4) {
    document.write("Aluno aprovado " + nota + " valores " + " <br> ");
} else if ((nota < 7) && (nota >= 4)) {
    document.write("O aluno está em recuperação " + nota + " valores" + " <br>");
} else {
    document.write("Alunos reprovado " + nota + " valores");
}

document.write("<br>", "<hr>");

var sol = true;
var nublado = false;

if (sol) { // No caso dos operadores lógicos não precisamos comparar variáveis dentro das condições.
    document.write("Vamos a praia " + "<br>");
} else if (nublado) {
    document.write("Vamos ao parque " + "<br>");
} else {
    document.write("Vamos ficar em casa estudando Javascript " + "<br>");
}