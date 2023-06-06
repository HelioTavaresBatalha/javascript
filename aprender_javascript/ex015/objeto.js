//  Criar Objeto em Javascript de forma literal

document.write("<br><br><br>","Criar Objeto em Javascript de forma literal","<br><br><hr><hr>");

var cadeira = {
    cor: "Preto",
    altura: 200,
    largura: 74,
    profundidade: 58,
    peso: 20
}

document.write("A cor da cadeira é: " + cadeira.cor + "<br> <hr>");
document.write("A altura da cadeira é: " + cadeira.altura + "cm", "<br> <hr><br>");

//Alterar a propreidade a cor.
cadeira.cor = "Branca";
document.write("A nova cor da cadeira é: " + cadeira.cor + " ", "<br> <hr>");

//Alterar a propreidade profundidade.
cadeira.peso = 17;
document.write("O peso da cadeira é: " + cadeira.peso + " kg ", "<br> <hr>");

//Deletar a profriedade profundidade.
document.write("Profundidade é: " + cadeira.profundidade + " cm ", "<br> <hr>");
delete cadeira.profundidade;
document.write("O elemento já foi eliminado: " + cadeira.profundidade + "<br> <hr>");

document.write("<br><br><br>","Criar Objeto em Javascript de forma não literal - utilizando o objeto new","<br><br><hr><hr>");
//  Criar Objeto em Javascript de forma não literal

var mesa = new Object();
mesa.cor = "Azul";
mesa.largura = 220;
mesa.comprimento = 300;
mesa.altura = 85;

document.write("A cor da mesa é: " + mesa.cor + "<br> <hr>");
document.write("A largura da mesa é: " + mesa.largura + "<br> <hr>");
document.write("O comprimento da mesa é: " + mesa.comprimento + " cm","<br> <hr>");
document.write("A altura da mesa é: " + mesa.altura + " cm","<br> <hr>");