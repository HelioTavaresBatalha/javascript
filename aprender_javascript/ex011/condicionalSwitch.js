// Estrutura  condicional Switch

var tipo = prompt("Digite um número inteiro positivo");

switch (tipo) {
    case '1':
        document.write("Você está na sala de estar");
        break;
    case '2':
        document.write("Você está na cozinha");
        break;
    case '3':
        document.write(" Você está na casa de banho");
        break;
    default:
        document.write("A sua posição não corresponde a nenhuma divisão do imóvel!");

}
